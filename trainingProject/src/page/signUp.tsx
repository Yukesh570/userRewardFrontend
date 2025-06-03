import axios from "axios";
import { useState } from "react";

export default function SignUp(){
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')

    const handleSignUp=async(e:React.FormEvent)=>{
        e.preventDefault();
        await axios.post("http://localhost:5000/api/singUp",{email,password});
        alert("account created")
    };
    return(
        <form onSubmit={handleSignUp}>
            <h2>Signup</h2>
            <input value={email} onChange={e=>setEmail(e.target.value)} placeholder="Email"/>
            <input type="password" value={password} onChange={e=>setPassword(e.target.value)} placeholder="Password"/>
            <button type="submit">Create Account</button>

        </form>
    )

}