import { TrashIcon } from "@radix-ui/react-icons";
import { Avatar, AvatarFallback } from "../../components/ui/avatar";
import { Button } from "../../components/ui/button";
import { useDispatch } from "react-redux";
import { deleteComment } from "../../Redux/Comment/Action";

function CommentCard({item}) {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteComment(item.id))
  }
  return (
    <div className="flex justify-between">
      <div className="flex items-center gap-4">
        <Avatar className="cursor-pointer text-primary">
          <AvatarFallback>{item.user.name[0] + item.user.fullName[0]}</AvatarFallback>
        </Avatar>
        <div className="´spcae-y-1">
          <p>{item.user.name + " " + item.user.fullName}</p>
          <p>{item.content}</p>
        </div>
      </div>
      <Button onClick={handleDelete} className="rounded-sm" variant="ghost" size="icon">
        <TrashIcon />
      </Button>
    </div>
  );
}

export default CommentCard;
