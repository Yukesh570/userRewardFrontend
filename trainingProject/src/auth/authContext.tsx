import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface AuthContextType {
  token: string | null;
  login: (token: string, expiresIn: number) => void;
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
  const login = (newToken: string, expiresIn: number) => {
    const expiryTime = Date.now() + expiresIn * 1000;
    localStorage.setItem("token", newToken);
    localStorage.setItem("expiry", expiryTime.toString());
    setToken(newToken);
    setTimeout(() => logout(), expiresIn * 1000);
  };

  const logout = () => {
    setToken(null);
    localStorage.removeItem("token");
    localStorage.removeItem("expiry");
    navigate("/login");
  };

  return (
    // !!token turn the token into boolean
    <AuthContext.Provider
      value={{ token, login, logout, isAuthenticated: !!token }}
    >
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
