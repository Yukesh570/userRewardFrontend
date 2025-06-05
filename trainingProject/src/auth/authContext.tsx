import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode"; // ✅ Correct way

interface AuthContextType {
  token: string | null;
  login: (token: string) => void;
  logout: () => void;
  isAuthenticated: boolean;
}
const AuthContext = createContext<AuthContextType | undefined>(undefined);
export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  //authprovider is an react fucntion component and can have childern
  children, //({childern})=>{ } here childern is a prop
}) => {
  const [token, setToken] = useState<string | null>(() =>
    localStorage.getItem("token")
  );
  const navigate = useNavigate();

  useEffect(() => {
    const expiry = localStorage.getItem("expiry");
    if (expiry && Date.now() > Number(expiry)) {
      logout();
    } else if (expiry) {
      const timeout = Number(expiry) - Date.now();
      setTimeout(() => logout(), timeout);
    }
  }, []);
  const login = (newToken: string) => {
    console.log("token", newToken);
    const decoded: any = jwtDecode(newToken);
    console.log("decode", decoded);
    const expTimeMs: any = decoded.exp * 1000; // convert seconds to ms
    const delay = expTimeMs - Date.now();
    console.log("delay", delay);


    localStorage.setItem("token", newToken);
    localStorage.setItem("expiry", expTimeMs);
    setToken(newToken);
    setTimeout(() => logout(), delay); // logout when token expires
  };

  const logout = () => {
    setToken(null);
    localStorage.removeItem("token");
    localStorage.removeItem("expiry");
    navigate("/login");
  };
  const isAuthenticated = !!token;

  return (
    // !!token turn the token into boolean
    <AuthContext.Provider value={{ token, login, logout, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const ctx = useContext(AuthContext); //useContext is a react hook that allows you to access the context value
  // context is a way to share global data without passing props down manually
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
};
