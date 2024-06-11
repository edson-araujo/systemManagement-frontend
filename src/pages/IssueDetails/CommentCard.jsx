import { TrashIcon } from "@radix-ui/react-icons";
import { Avatar, AvatarFallback } from "../../components/ui/avatar";
import { Button } from "../../components/ui/button";

function CommentCard() {
  return (
    <div className="flex justify-between">
      <div className="flex items-center gap-4">
        <Avatar className="cursor-pointer text-primary">
          <AvatarFallback>EA</AvatarFallback>
        </Avatar>
        <div className="´spcae-y-1">
          <p>Edson Aráujo</p>
          <p>Como você está?</p>
        </div>
      </div>
      <Button className="rounded-sm" variant="ghost" size="icon">
        <TrashIcon />
      </Button>
    </div>
  );
}

export default CommentCard;
