import { PersonIcon } from '@radix-ui/react-icons'
import { Button } from '../../components/ui/button'
import { Dialog, DialogContent, DialogHeader, DialogTrigger } from '../../components/ui/dialog'
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from '../../components/ui/dropdown-menu'
import CreateProjectForm from './CreateProjectForm'
import { DropdownMenuItem } from '@radix-ui/react-dropdown-menu'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../../Redux/Auth/Action'

function Navbar() {
    const {auth} = useSelector(store=>store);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleLogout =  () => {
        dispatch(logout());
    }
  return (
    <div className='border-b py-4 px-5 flex items-center justify-between'>
        <div className='flex items-center gap-3'>
            <p onClick={() => navigate('/')} className='cursor-pointer'>Proejct Management</p>
            <Dialog>
                <DialogTrigger>
                    <Button variant='ghost'>New Project</Button>
                </DialogTrigger>

                <DialogContent>
                    <DialogHeader>Criar novo Projeto</DialogHeader>
                    <CreateProjectForm/>
                </DialogContent>
            </Dialog>

            <Button onClick={() => navigate("/upgrade_plan")} variant='ghost'>Upgrade</Button>
        </div>

        <div className='flex gap-3 items-center'>
            <DropdownMenu>
                <DropdownMenuTrigger>
                    <Button variant="outline" size="icon">
                        <PersonIcon/>
                    </Button>
                </DropdownMenuTrigger>

                <DropdownMenuContent>
                    <DropdownMenuItem className='cursor-pointer' onClick={handleLogout}>Logout</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>

            <p>{auth.user?.fullName}</p>
        </div>
    </div>
  )
}

export default Navbar