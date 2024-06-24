import { Button } from "../../components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "../../components/ui/dropdown-menu";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../Redux/Auth/Action";
import {
  ChevronDownIcon,
  Computer,
  FolderKanban,
  LogOut,
  Moon,
  PlusIcon,
  Sun,
} from "lucide-react";
import { useTheme } from "../../components/theme-provider";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "../../components/ui/menubar";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "../../components/ui/dialog";
import CreateProjectForm from "./CreateProjectForm";

function Navbar() {
  const { setTheme } = useTheme();
  const { auth } = useSelector((store) => store);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <div className="border-b py-4 px-5 flex items-center justify-between sticky top-0 z-50 bg-white dark:bg-muted">
      <div className="flex gap-3 items-center">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Button
              variant="outline"
              size="icon"
              className="text-primary dark:hover:bg-blue-800 dark:hover:text-white"
            >
              {auth.user?.name[0] + auth.user?.fullName[0]}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56" align="end" forceMount>
            <DropdownMenuLabel className="font-normal">
              <div className="flex flex-col space-y-1">
                <p className="text-sm font-medium leading-none">
                  {auth.user?.name + " " + auth.user?.fullName}
                </p>
                <p className="text-xs leading-none text-muted-foreground">
                  {auth.user?.email}
                </p>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuSub>
                <DropdownMenuSubTrigger className="cursor-pointer">
                  <span>Alternar tema</span>
                </DropdownMenuSubTrigger>
                <DropdownMenuPortal>
                  <DropdownMenuSubContent>
                    <DropdownMenuItem
                      className="cursor-pointer"
                      onClick={() => setTheme("light")}
                    >
                      <Sun className="mr-2 h-4 w-4" />
                      <span>Claro</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      className="cursor-pointer"
                      onClick={() => setTheme("dark")}
                    >
                      <Moon className="mr-2 h-4 w-4 " />
                      <span>Escuro</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      className="cursor-pointer"
                      onClick={() => setTheme("system")}
                    >
                      <Computer className="mr-2 h-4 w-4" />
                      <span>Sistema</span>
                    </DropdownMenuItem>
                  </DropdownMenuSubContent>
                </DropdownMenuPortal>
              </DropdownMenuSub>
              <DropdownMenuItem className="cursor-pointer">
                test
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer">
                test
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                className="cursor-pointer"
                onClick={() => navigate("/")}
              >
                <FolderKanban className="mr-2 h-4 w-4" />
                Projetos
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer">
                test
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer">
                test
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer">
                test
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild>
              <DropdownMenuItem
                className="cursor-pointer"
                onClick={handleLogout}
              >
                <LogOut className="mr-2 h-4 w-4" />
                Sair
              </DropdownMenuItem>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <Menubar>
        <MenubarMenu>
          <MenubarTrigger className="cursor-pointer">
            Projetos
            <ChevronDownIcon className="ml-auto h-4 w-4" />
          </MenubarTrigger>
          <MenubarContent>
            <MenubarItem
              className="cursor-pointer"
              onClick={() => navigate("/")}
            >
              <FolderKanban className="mr-2 h-4 w-4" />
              Meus projetos
            </MenubarItem>
              <Dialog>
                <DialogTrigger className="flex items-center gap-1">
            <MenubarItem onSelect={(e)=>{e.preventDefault()}} className="cursor-pointer">
                  <PlusIcon className="mr-2 h-4 w-4" />
                  <p className="w-full pr-16">Novo projeto</p>
                  
            </MenubarItem>
                </DialogTrigger>

                <DialogContent>
                  <DialogHeader>Criar novo Projeto</DialogHeader>
                  <CreateProjectForm />
                </DialogContent>
              </Dialog>
            <MenubarSeparator />
            <MenubarItem>Share</MenubarItem>
            <MenubarSeparator />
            <MenubarItem>Print</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger className="cursor-pointer">
            Teste
            <ChevronDownIcon className="ml-auto h-4 w-4" />
          </MenubarTrigger>
          <MenubarContent>
            <MenubarItem>
              New Tab <MenubarShortcut>⌘T</MenubarShortcut>
            </MenubarItem>
            <MenubarItem>New Window</MenubarItem>
            <MenubarSeparator />
            <MenubarItem>Share</MenubarItem>
            <MenubarSeparator />
            <MenubarItem>Print</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger className="cursor-pointer">
            Teste
            <ChevronDownIcon className="ml-auto h-4 w-4" />
          </MenubarTrigger>
          <MenubarContent>
            <MenubarItem>
              New Tab <MenubarShortcut>⌘T</MenubarShortcut>
            </MenubarItem>
            <MenubarItem>New Window</MenubarItem>
            <MenubarSeparator />
            <MenubarItem>Share</MenubarItem>
            <MenubarSeparator />
            <MenubarItem>Print</MenubarItem>
          </MenubarContent>
        </MenubarMenu>

        <MenubarMenu>
          <MenubarTrigger className="cursor-pointer">
            Teste
            <ChevronDownIcon className="ml-auto h-4 w-4" />
          </MenubarTrigger>
          <MenubarContent>
            <MenubarItem>
              New Tab <MenubarShortcut>⌘T</MenubarShortcut>
            </MenubarItem>
            <MenubarItem>New Window</MenubarItem>
            <MenubarSeparator />
            <MenubarItem>Share</MenubarItem>
            <MenubarSeparator />
            <MenubarItem>Print</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>

      <div className="flex items-center gap-3">
        <p
          onClick={() => navigate("/")}
          className="cursor-pointer text-xl md:text-xl font-extrabold bg-clip-text text-transparent bg-[linear-gradient(to_right,theme(colors.blue.600),theme(colors.blue.300),theme(colors.blue.600),theme(colors.blue.800),theme(colors.blue.600),theme(colors.blue.300),theme(colors.blue.600))] bg-[length:200%_auto] animate-gradient uppercase  hidden md:block"
        >
          Gestão de Projetos
        </p>
      </div>
    </div>
  );
}

export default Navbar;
