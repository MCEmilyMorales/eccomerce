import { useRouter } from "next/navigation";
import { AxiosError } from "axios";

import { useAuth } from "@/app/hooks/authContext";
import Login from "@/services/loginService/login";
import { LoginData } from "@/services/loginService/loginData.type";
import { useToast } from "@/app/hooks/toastContext";
import { ZodError } from "zod";
//tipo de datos que deveria recibir la arrayfunction HandleLogin
type HandleLogin = (event: React.FormEvent, login: LoginData) => Promise<void>;

const useOnSubmitFormLogin = (): { handleFormLogin: HandleLogin } => {
  const router = useRouter();

  const { successfulLogin } = useAuth();

  const { addToast } = useToast();

  const handleFormLogin: HandleLogin = async (
    event: React.FormEvent,
    login: LoginData,
  ) => {
    event.preventDefault();
    try {
      const answerBack = await Login(login);

      if (answerBack) {
        //cargar la respuesta en la cookie
        document.cookie = "isLoggedIn=true; path=/; SameSite=Lax; Secure";
        //mensaje para usuario
        addToast("Inicio de sesion exitoso", "success");
        //envio de informacion al cliente
        successfulLogin(answerBack);
        //redireccion
        router.push("/private/productos");
        return;
      }
    } catch (error: unknown) {
      if (error instanceof AxiosError) {
        const msg =
          error.response?.data.message || "Ocurrio un error inesperado.";
        //mensaje para usuario
        addToast(msg, "error");
        throw new Error(msg);
      }

      if (error instanceof ZodError) {
        const msg = error.issues.map((e) => e.message).join("\n");
        addToast(msg, "warning");
        throw error;
      }
      //mensaje para usuario
      addToast("Error. Intente mas tarde.", "error");
      throw error instanceof Error ? error : new Error(String(error));
    }
  };
  return { handleFormLogin };
};
export default useOnSubmitFormLogin;
