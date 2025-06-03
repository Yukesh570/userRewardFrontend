import { BrowserRouter, Route, Routes } from "react-router-dom"
import { AuthProvider } from "./auth/authContext"
import Login from "./page/login"
import SignUp from "./page/signUp"
import Home from "./page/Home"
import ProtectedRoute from "./auth/protectedRoute"
import './output.css' // ✅ Import Tailwind styles here

function App() {

  return (
    <BrowserRouter>
    <AuthProvider>
      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signUp"element={<SignUp/>}/>
        <Route path="/"element={<ProtectedRoute><Home/></ProtectedRoute>}/>

      </Routes>
    </AuthProvider>
    
    </BrowserRouter>
  )
}

export default App
