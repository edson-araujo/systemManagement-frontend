import { Avatar, AvatarFallback } from "../../components/ui/avatar"

function UserList() {
  return (
    <div>
        <div className='space-y-2'>
            <div className='border rounded-sm'>
                <p className="py-2 px-4  ">{ "Edson Alves" || "Unassigne"}</p>
            </div>

            {[1,1,1,1].map((item) => <div key={item} className="py-2 group hover:bg-primary/10 cursor-pointer flex items-center space-x-4 rounded-sm px-4">
                <Avatar>
                    <AvatarFallback className='text-primary'>
                        EA
                    </AvatarFallback>
                </Avatar>

                <div className="space-y-1">
                    <p className="text-sm leading-none ">Edson Araújo</p>
                    <p className="text-sm text-muted-foreground">@edsonaraujo</p>
                </div>
            </div>)}
        </div>
    </div>
  )
}

export default UserList