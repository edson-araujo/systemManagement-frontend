import { DotsVerticalIcon, PersonIcon } from "@radix-ui/react-icons";
import { Button } from "../../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../../components/ui/dropdown-menu";
import { Avatar, AvatarFallback } from "../../components/ui/avatar";
import UserList from "./UserList";
import { useNavigate } from "react-router-dom";

function IssueCard() {
  const navigate = useNavigate();
  return (
    <div>
      <Card className="rounded-md py-1 pb-2 shadow">
        <CardHeader className="py-0 pb-1">
          <div className="flex justify-between items-center">
            <CardTitle className='cursor-pointer' onClick={() => navigate('/project/3/issue/10')}>Criar Navbar</CardTitle>
            <DropdownMenu>
              <DropdownMenuTrigger>
                <Button size="icon" variant="ghost">
                  <DotsVerticalIcon />
                </Button>
              </DropdownMenuTrigger>

              <DropdownMenuContent>
                <DropdownMenuItem>Em progresso</DropdownMenuItem>
                <DropdownMenuItem>Feito</DropdownMenuItem>
                <DropdownMenuItem>Editar</DropdownMenuItem>
                <DropdownMenuItem>Deletar</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </CardHeader>
        <CardContent className="py-0">
            <div className="flex items-center justify-between">
                <p>FBP - {1}</p>
                <DropdownMenu className='w-[30rem] border border-sky-400'>
                    <DropdownMenuTrigger>
                        <Button 
                        size="icon"
                        className='text-gray-400 hover:text-primary rounded-full '>
                            <Avatar>
                                <AvatarFallback>
                                    <PersonIcon/>
                                </AvatarFallback>
                            </Avatar>
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <UserList/>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default IssueCard;
