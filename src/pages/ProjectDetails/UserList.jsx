import { useSelector } from "react-redux"
import { Avatar, AvatarFallback } from "../../components/ui/avatar"

function UserList() {
    const {project} = useSelector(store => store);
  return (
    <div>
        <div className='space-y-2'>
            <div className='border rounded-sm'>
                <p className="py-2 px-4  ">{ "Edson Alves" || "Unassigne"}</p>
            </div>

            {project.projectDetails?.team.map((item) => <div key={item} className="py-2 group hover:bg-primary/10 cursor-pointer flex items-center space-x-4 rounded-sm px-4">
                <Avatar>
                    <AvatarFallback className='text-primary'>
                        {item.fullName[0]}
                    </AvatarFallback>
                </Avatar>

                <div className="space-y-1">
                    <p className="text-sm leading-none ">{item.fullname}</p>
                    <p className="text-sm text-muted-foreground">@edsonaraujo</p>
                </div>
            </div>)}
        </div>
    </div>
  )
}

export default UserList