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
  loading: boolean;
  successfulLogin: (val: string) => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContext | null>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  //si existe un refreshToken en la cookie, entonces cargar el user
  useEffect(() => {
    const rehydrate = async () => {
      try {
        const data = await Refresh();
        if (data) {
          setUser(data);
        }
      } catch (error) {
        setUser(null);
      }
      setLoading(false);
    };
    rehydrate();
  }, []);

  const successfulLogin = (data: string) => setUser(data);

  // metodo que limpia la cookie
  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, loading, successfulLogin, logout }}>
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
