import { useParams } from "react-router-dom";
import { ScrollArea } from "../../components/ui/scroll-area";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../components/ui/tabs";
import CommentCard from "./CommentCard.jsx";
import CreateCommentForm from "./CreateCommentForm.jsx";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select.jsx";
import { Avatar, AvatarFallback } from "../../components/ui/avatar.jsx";
import { Badge } from "../../components/ui/badge.jsx";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchIssueById, updateIssueStatus } from "../../Redux/Issue/Action.js";
import { fetchComments } from "../../Redux/Comment/Action.js";

function IssueDetails() {
  const { projectId, issueId } = useParams();
  const dispatch = useDispatch();
  const { issue, comment } = useSelector((store) => store);
  const handleUpdateIsssueStatus = (status) => {
    dispatch(updateIssueStatus({ id: issueId, status: status }));
    console.log(status);
  };

  useEffect(() => {
    dispatch(fetchIssueById(issueId));
    dispatch(fetchComments(issueId));
  }, [dispatch, issueId]);

  return (
    <div className="px-20 py-8 text-gay-400">
      <div className="flex justify-around">
        <ScrollArea className="h-[80vh] w-[60%] border p-10 rounded-sm bg-primary-foreground">
          <div>
            <h1 className="text-lg font-semibold text-primary">
              {issue.issueDetails?.title}
            </h1>

            <div className="py-5">
              <h2 className="font-semibold text-gray-400">Descrição</h2>
              <p className="text-gray-400 text-sm mt-">
                {issue.issueDetails?.description}
              </p>
            </div>

            <div className="mt-5">
              <h1>Atividade</h1>
              <Tabs defaultValue="comments" className="w-[400px]">
                <TabsList className="mb-5">
                  <TabsTrigger value="all">Tudo</TabsTrigger>
                  <TabsTrigger value="comments">Comentários</TabsTrigger>
                  <TabsTrigger value="history">Histórico</TabsTrigger>
                </TabsList>

                <TabsContent value="all">Tudo da sua conta</TabsContent>
                <TabsContent value="comments">
                  <CreateCommentForm issueId={issueId} />
                  <div className="mt-8 space-y-6">
                    {comment.comments.map((item) => (
                      <CommentCard item={item} key={item} />
                    ))}
                  </div>
                </TabsContent>
                <TabsContent value="history">
                  Todas as alterações da sua conta
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </ScrollArea>

        <div className="w-full lg:w-[30%] space-y-2 ">
          <Select onValueChange={handleUpdateIsssueStatus}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="A fazer" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="A fazer">A fazer</SelectItem>
              <SelectItem value="Em progresso">Em progresso</SelectItem>
              <SelectItem value="Feito">Feito</SelectItem>
            </SelectContent>
          </Select>
          <div className="border rounded-sm bg-primary-foreground">
            <p className="border-b py-3 px-5">Detalhes</p>
            <div className="p-5">
              <div className="space-y-7">
                <div className="flex gap-10 items-center">
                  <p className="w-[7rem]">Adsministrador</p>
                  {issue.issueDetails?.assignee?.name?<div className="flex items-center gap-3">
                    <Avatar className="cursor-pointer text-primary h-8 w-8 text-xs">
                      <AvatarFallback>{issue.issueDetails?.assignee?.name[0] + issue.issueDetails?.assignee?.fullName[0]}</AvatarFallback>
                    </Avatar>
                    <p>{issue.issueDetails?.assignee?.name + " " + issue.issueDetails?.assignee?.fullName}</p>
                  </div>: <p>nenhum</p>}
                  
                </div>

                <div className="flex gap-10 items-center">
                  <p className="w-[7rem]">Labels</p>
                  <p>None</p>
                </div>

                <div className="flex gap-10 items-center">
                  <p className="w-[7rem]">Status</p>
                  <Badge>{issue.issueDetails?.status}</Badge>
                </div>

                <div className="flex gap-10 items-center">
                  <p className="w-[7rem]">Release</p>
                  <p>11-06-2024</p>
                </div>
                <div className="flex gap-10 items-center">
                  <p className="w-[7rem]">Reportador</p>
                  <div className="flex items-center gap-3">
                    <Avatar className="cursor-pointer text-primary h-8 w-8 text-xs">
                      <AvatarFallback>FC</AvatarFallback>
                    </Avatar>
                    <p>Felipe Costa</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IssueDetails;
