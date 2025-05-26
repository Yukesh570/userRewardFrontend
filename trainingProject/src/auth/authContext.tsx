import { createContext, useState } from "react";
import {useNavigate} from "react-router-dom";

interface AuthContextType{
    token:string|null;
    login:(token:string,expiresIn:number)=>void;
    logout:()=>void;
    isAuthenticated:()=>boolean
}
const AuthContext=createContext<AuthContextType|undefined>(undefined);
export const AuthProvider:React.FC<{children:React.ReactNode}> =({childern})=>{    //authprovider is an react fucntion component and can have childern
    const [token,setToken]=useState<string|null>(()=>localStorage.getItem('token'))                                                                                 //({childern})=>{ } here childern is a prop
    const navigate=useNavigate()
}  