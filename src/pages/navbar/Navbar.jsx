import { PersonIcon } from "@radix-ui/react-icons";
import { Button } from "../../components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../../components/ui/dropdown-menu";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../Redux/Auth/Action";
import { ModeToggle } from "../../components/ui/mode-toggle";

function Navbar() {
  const { auth } = useSelector((store) => store);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <div className="border-b py-4 px-5 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <p
          onClick={() => navigate("/")}
          className="cursor-pointer text-xl md:text-xl font-extrabold bg-clip-text text-transparent bg-[linear-gradient(to_right,theme(colors.blue.600),theme(colors.blue.300),theme(colors.blue.600),theme(colors.blue.800),theme(colors.blue.600),theme(colors.blue.300),theme(colors.blue.600))] bg-[length:200%_auto] animate-gradient uppercase"
        >
          Gestão de Projetos
        </p>
      </div>

      <div className="flex gap-3 items-center">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Button variant="outline" size="icon">
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
              <DropdownMenuItem className="cursor-pointer">
                test
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
                Sair
              </DropdownMenuItem>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <ModeToggle />
      </div>
    </div>
  );
}

export default Navbar;
