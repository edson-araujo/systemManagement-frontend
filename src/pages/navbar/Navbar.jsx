import { PersonIcon } from '@radix-ui/react-icons'
import { Button } from '../../components/ui/button'
import { Dialog, DialogContent, DialogHeader, DialogTrigger } from '../../components/ui/dialog'
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from '../../components/ui/dropdown-menu'
import CreateProjectForm from './CreateProjectForm'
import { DropdownMenuItem } from '@radix-ui/react-dropdown-menu'

function Navbar() {
  return (
    <div className='border-b py-4 px-5 flex items-center justify-between'>
        <div className='flex items-center gap-3'>
            <p className='cursor-pointer'>Proejct Management</p>
            <Dialog>
                <DialogTrigger>
                    <Button variant='ghost'>New Project</Button>
                </DialogTrigger>

                <DialogContent>
                    <DialogHeader>Criar novo Projeto</DialogHeader>
                    <CreateProjectForm/>
                </DialogContent>
            </Dialog>

            <Button variant='ghost'>Upgrade</Button>
        </div>

        <div className='flex gap-3 items-center'>
            <DropdownMenu>
                <DropdownMenuTrigger>
                    <Button variant="outline" size="icon">
                        <PersonIcon/>
                    </Button>
                </DropdownMenuTrigger>

                <DropdownMenuContent>
                    <DropdownMenuItem>Logout</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>

            <p>Edson Araújo</p>
        </div>
    </div>
  )
}

export default Navbar