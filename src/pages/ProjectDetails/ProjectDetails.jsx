import { PlusIcon } from "@radix-ui/react-icons";
import { Avatar, AvatarFallback } from "../../components/ui/avatar";
import { Badge } from "../../components/ui/badge";
import { Button } from "../../components/ui/button";
import { Dialog, DialogClose, DialogContent, DialogHeader, DialogTrigger } from "../../components/ui/dialog";
import { ScrollArea } from "../../components/ui/scroll-area";
import InvitedUserForm from "./InvitedUserForm";
import ChatBox from "./ChatBox";
import IssueList from "./IssueList";

function ProjectDetails() {
  const handleProjectInvitation = () => {};
  return (
    <div className="ml-5 lg:px-10">
      <div className="lg:flex gap-5 justify-between pb-4">
        <ScrollArea className="h-screen lg:w-[69%] pr-2">
          <div className="text-gray-400 pb-10 w-full">
            <h1 className="text-large font-semibold pb-5">
              Create Ecommerce Project
            </h1>
          </div>

          <div className="space-y-5 pb-10">
            <p className="w-full md:max-w-lg lg:max-w-xl text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
              aliquid expedita atque sit libero totam voluptatem impedit qui vel
              necessitatibus magni veritatis illo sint eveniet aliquam, deleniti
              vitae et enim?
            </p>

            <div className="flex">
              <p className="w-36">Project Lead:</p>
              <p className="flex items-center gap-2">Edson Araújo</p>
            </div>
            <div className="flex">
              <p className="w-36">Membros:</p>
              <div className="flex items-center gap-2">
                {[1, 1, 1, 1].map((item) => (
                  <Avatar className="cursor-pointer" key={item} className='text-primary'>
                    <AvatarFallback>EA</AvatarFallback>
                  </Avatar>
                ))}
              </div>
              <Dialog>
                <DialogTrigger>
                  <DialogClose>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={handleProjectInvitation}
                      className="ml-2"
                    >
                      <span>Enviar</span>
                      <PlusIcon className="h-3 w-3" />
                    </Button>
                  </DialogClose>
                </DialogTrigger>

                <DialogContent>
                    <DialogHeader>
                        Convidar usuário
                    </DialogHeader>
                    <InvitedUserForm/>
                </DialogContent>
              </Dialog>
            </div>

            <div className="flex">
              <p className="w-36">Categoria:</p>
              <p>Fullstack</p>
            </div>

            <div className="flex">
              <p className="w-36">Categoria:</p>
              <Badge>Edson</Badge>
            </div>

            <section>
                <p className="py-5 border-b text-lg tracking-wider">Task</p>
                <div className="lg:flex md:flex gap-3 justify-between py-5">
                    <IssueList status="pedding" title="A fazer"/>
                    <IssueList status="in_progress" title="Em progresso"/>
                    <IssueList status="done"title="Feito"/>
                </div>
            </section>
          </div>
        </ScrollArea>

        <div className="lg:w-[30%] rounded-md sticky right-5 top-10">
            <ChatBox/>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetails;
