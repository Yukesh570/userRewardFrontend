import { BrowserRouter, Route, Routes } from "react-router-dom"
import { AuthProvider } from "./auth/authContext"
import Login from "./page/login"
import SignUp from "./page/signUp"
import Home from "./page/Home"
import ProtectedRoute from "./auth/protectedRoute"
import GuestRoute from "./auth/guestRoute"
import Navbar from "./component/Navbars/Navbar"

function App() {

  return (
    <BrowserRouter>
    <AuthProvider>
      <Routes>
        <Route path="/login" element={<GuestRoute><Login/></GuestRoute>}/>
        <Route path="/signUp"element={<GuestRoute><SignUp/></GuestRoute>}/>
        <Route path="/"element={<ProtectedRoute><Home/></ProtectedRoute>}/>
        <Route path="/home"element={<Navbar/>}/>

      </Routes>
    </AuthProvider>
    
    </BrowserRouter>
  )
}

export default App
