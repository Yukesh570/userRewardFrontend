import { useAuth } from "../auth/authContext"

export default function Home(){
    const {logout}=useAuth();
    return(
        <div>
            <h1>HomePage</h1>
            <button onClick={logout}>LogOut</button>
        </div>
    )
}