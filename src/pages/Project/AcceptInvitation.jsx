import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "../../components/ui/button";
import { acceptInvitation } from "../../Redux/Project/Action";

const AcceptInvitaion=()=>{
    const dispatch=useDispatch();
    const location=useLocation();
    const navigate=useNavigate();
    const handleAcceptInvitation=()=>{
        const urlParams=new URLSearchParams(location.search);
        const token=urlParams.get("token");
        dispatch(acceptInvitation({token,navigate}));
    }
    return(
        <div className="h-[85vh] flex flex-col justify-center items-center">
            <h1 className="py-5 font-semibold text-xl">Você está convidado a participar do projeto</h1>
            <Button onClick={handleAcceptInvitation}>Aceitar convite</Button>
        </div>
    )
}
export default AcceptInvitaion