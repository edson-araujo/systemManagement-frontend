import {
  DotsVerticalIcon,
} from "@radix-ui/react-icons";
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

function ProjectCard() {
  const navigate = useNavigate();
  return (
    <Card className="p-5 w-full lg:max-w-3x1 bg-slate-300/10">
      <div className="space-y-5">
        <div>
          <div className="flex justify-between">
            <div className="flex items-center">
              
              <h1 onClick={(()=>navigate("/project/3"))} className="cursor-pointer font-bold text-lg ">
                Create Ecommerce Project
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
                  <DropdownMenuItem>Delete</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>

          <div className="pb-4">
            <p className="text-sm text-gray-400">Fullstack</p>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
            sapiente atque quos, consectetur accusantium eos tempora molestiae
            ullam culpa ducimus consequatur. Nam dolor ad fuga dicta expedita,
            commodi modi recusandae?
          </p>
        </div>

        <div className="flex flex-wrap gap-2 items-center">
          {[1,1,1,1].map((item) => <Badge key={item} variant="outline" className={"bg-primary/10 hover:bg-primary hover:text-white text-primary cursor-pointer"}>{"Frontend"}</Badge>)}
        </div>
      </div>
    </Card>
  );
}

export default ProjectCard;
