import { Navigate } from "react-router-dom";
import { useAuth } from "./authContext"



const GuestRoute:React.FC<{children:React.ReactNode}>=({children})=>{
    const {isAuthenticated}=useAuth();
    return isAuthenticated ?<Navigate to="/"/>:<>{children}</>
}
export default GuestRoute;
