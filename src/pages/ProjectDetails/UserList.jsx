import { useDispatch, useSelector } from "react-redux"
import { Avatar, AvatarFallback } from "../../components/ui/avatar"
import { assignedUserToIssue } from "../../Redux/Issue/Action";

function UserList({issueDetails}) {
    const {project} = useSelector(store => store);
    const dispatch = useDispatch();
    const handleAssignIssueToUser = (userId) => {
        dispatch(assignedUserToIssue({issueId: issueDetails.id, userId}));
    }
  return (
    <div>
        <div className='space-y-2'>
            <div className='border rounded-sm'>
                <p className="py-2 px-4  ">{issueDetails.assignee.name + " " + issueDetails.assignee.fullName || "Unassigne"}</p>
            </div>

            {project.projectDetails?.team.map((item) => <div 
            onClick={() => handleAssignIssueToUser(item.id)}
            key={item} className="py-2 group hover:bg-primary/10 cursor-pointer flex items-center space-x-4 rounded-sm px-4">
                <Avatar>
                    <AvatarFallback className='text-primary'>
                        {item.fullName[0]}
                    </AvatarFallback>
                </Avatar>

                <div className="space-y-1">
                    <p className="text-sm leading-none ">{item.name + " " + item.fullName}</p>
                    <p className="text-sm text-muted-foreground">@{item.name.toLowerCase() + item.fullName.toLowerCase()}</p>
                </div>
            </div>)}
        </div>
    </div>
  )
}

export default UserList