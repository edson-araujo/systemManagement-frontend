import { PaperPlaneIcon } from "@radix-ui/react-icons";
import { Avatar, AvatarFallback } from "../../components/ui/avatar";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { ScrollArea } from "../../components/ui/scroll-area";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchChatByProject,
  fetchChatMessages,
  sendMessage,
} from "../../Redux/Chat/Action";
import { useParams } from "react-router-dom";

function ChatBox() {
  const [message, setMessage] = useState("");
  const [isMinimized, setIsMinimized] = useState(true);
  const dispatch = useDispatch();
  const { auth, chat } = useSelector((store) => store);
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchChatByProject(id));
  }, [id, dispatch]);

  useEffect(() => {
    dispatch(fetchChatMessages(chat.chat?.id));
  }, [chat.chat?.id, dispatch]);

  const handleSendMessage = () => {
    dispatch(
      sendMessage({
        senderId: auth.user?.id,
        projectId: id,
        content: message,
      })
    );
    setMessage("");
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const toggleMinimize = () => {
    setIsMinimized(!isMinimized);
  };

  return (
    <div className="fixed bottom-0 right-0 w-full md:w-1/4">
      <div className="border rounded-sm bg-primary/10">
        <div className="border-b p-2 flex justify-between items-center cursor-pointer" onClick={toggleMinimize}>
          <h1 className="text-primary text-lg font-semibold">ChatBox</h1>
          <Button variant="ghost" className="text-primary">{isMinimized ? "▲" : "▼"}</Button>
        </div>

        {!isMinimized && (
          <div>
            <ScrollArea className="h-[32rem] w-full p-5 gap-3 flex-col bg-white">
              {chat.messages?.map((item, index) =>
                item.sender.id !== auth.user.id ? (
                  <div key={index} className="flex gap-2 mb-2 justify-start">
                    <Avatar className="cursor-pointer text-primary">
                      <AvatarFallback>{item.sender.name[0] + item.sender.fullName[0]}</AvatarFallback>
                    </Avatar>
                    <div className="space-y-2 py-2 px-5 border rounded-ss-2xl rounded-e-xl">
                      <p>{item.sender.name + " " + item.sender.fullName}</p>
                      <p>{item.content}</p>
                    </div>
                  </div>
                ) : (
                  <div key={index} className="flex gap-2 mb-2 justify-end">
                    <div className="space-y-2 py-2 px-5 border rounded-se-2xl rounded-s-xl">
                      <p>{item.sender.name + " " + item.sender.fullName}</p>
                      <p>{item.content}</p>
                    </div>
                    <Avatar className="cursor-pointer text-primary mt-8">
                      <AvatarFallback>{item.sender.name[0] + item.sender.fullName[0]}</AvatarFallback>
                    </Avatar>
                  </div>
                )
              )}
            </ScrollArea>

            <div className="relative p-0">
              <Input
                placeholder="Tipo da mensagem..."
                className="py-7 border-t outline-none focus:outline-none focus:ring-0 rounded-none border-b-0 border-x-0"
                value={message}
                onChange={handleMessageChange}
              />
              <Button
                onClick={handleSendMessage}
                className="absolute right-2 top-3 rounded-full"
                size="icon"
                variant="ghost"
              >
                <PaperPlaneIcon className="text-primary" />
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ChatBox;
