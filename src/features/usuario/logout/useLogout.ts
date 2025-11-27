import { useAuth } from "@/app/hooks/authContext";
import { useToast } from "@/app/hooks/toastContext";
import Logout from "@/services/loginService/logoutService/logout";
import { AxiosError } from "axios";
import { redirect } from "next/navigation";

const useLogout = () => {
  const { addToast } = useToast();
  // estado para inicio de sesion de la navbar
  const { user, logout } = useAuth();

  const handleLogout = async (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    try {
      logout();
      const resBack = await Logout();
      if (resBack) {
        addToast("Sesion cerrada con éxito.");
        redirect("/");
      }
    } catch (error: unknown) {
      if (error instanceof AxiosError) {
        addToast(error.response?.data, "error");
        throw error;
      }
      throw error;
    }
  };
  return { handleLogout, user };
};
export default useLogout;
