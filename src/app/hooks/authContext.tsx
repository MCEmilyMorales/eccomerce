"use client";
import Refresh from "@/features/usuario/refreshService/refresh";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

type AuthContext = {
  user: string | null;
  successfulLogin: (val: string) => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContext | null>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<string | null>(null);

  useEffect(() => {
    const rehydrate = async () => {
      try {
        const data = await Refresh();
        if (data) {
          //cargar la respuesta en la cookie
          document.cookie = "isLoggedIn=true; path=/; SameSite=Lax; Secure";
          setUser(data);
        }
      } catch (error) {
        setUser(null);
      }
    };
    rehydrate();
  }, []);

  const successfulLogin = (data: string) => setUser(data);

  // metodo que limpia la cookie
  const logout = () => {
    document.cookie =
      "isLoggedIn=; path=/; SameSite=Lax; Secure; Expires=Thu, 01 Jan 1970 00:00:00 UTC;";
    return setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, successfulLogin, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth debe usarse dentro de un AuthProvider");
  }
  return context;
};
