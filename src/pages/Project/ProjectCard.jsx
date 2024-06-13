import { DotsVerticalIcon } from "@radix-ui/react-icons";
import { Card } from "../../components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
} from "../../components/ui/dropdown-menu";
import { DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import { Button } from "../../components/ui/button";
import { Badge } from "../../components/ui/badge";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteProject, fetchProjectById } from "../../Redux/Project/Action";

function ProjectCard({ item }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteProject({ projectId: item.id }));
  };

  return (
    <Card className="p-5 w-full lg:max-w-3x1 bg-slate-300/10">
      <div className="space-y-5">
        <div>
          <div className="flex justify-between">
            <div className="flex items-center">
              <h1
                onClick={() => navigate("/project/" + item.id)}
                className="cursor-pointer font-bold text-lg "
              >
                {item.name}
              </h1>
            </div>

            <div>
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <Button variant="ghost" size="icon">
                    <DotsVerticalIcon />
                  </Button>
                </DropdownMenuTrigger>

                <DropdownMenuContent>
                  <DropdownMenuItem>Update</DropdownMenuItem>
                  <DropdownMenuItem onClick={handleDelete}>
                    Delete
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>

          <div className="pb-4">
            <p className="text-sm text-gray-400">{item.category}</p>
          </div>
          <p>{item.description}</p>
        </div>

        <div className="flex flex-wrap gap-2 items-center">
          {item.tags.map((tag) => (
            <Badge
              key={tag}
              variant="outline"
              className={
                "bg-primary/10 hover:bg-primary hover:text-white text-primary cursor-pointer"
              }
            >
              {tag}
            </Badge>
          ))}
        </div>
      </div>
    </Card>
  );
}

export default ProjectCard;
