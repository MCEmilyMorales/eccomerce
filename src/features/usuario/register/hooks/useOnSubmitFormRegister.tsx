import { useToast } from "@/app/hooks/toastContext";
import { Datos } from "@/services/registerService/datos.types";
import { Register } from "@/services/registerService/register";
import { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import { ZodError } from "zod";

const useOnSubmitFormRegister = () => {
  const { addToast } = useToast();
  const router = useRouter();
  const handleEventForm = async (event: React.FormEvent, datos: Datos) => {
    event.preventDefault();
    try {
      const registro = await Register(datos);
      if (registro) {
        //mensaje a cliente
        addToast("Registrado exitoso", "success");
        router.push("/inicio");
        //mensaje a cliente
        addToast("Por favor inicia sesion", "info");
      }
    } catch (error: unknown) {
      if (error instanceof AxiosError) {
        const msg =
          error.response?.data.message || "Ocurrio un error inesperado";
        //mensaje a cliente
        addToast(msg, "error");
        throw new Error(msg);
      }

      //manejar el error de zod
      if (error instanceof ZodError) {
        const msg = error.issues.map((e) => e.message).join("\n");
        //mensaje a cliente
        addToast(msg, "warning");
        throw error;
      }
      addToast("Ocurrio un error inesperado. Intente más tarde.", "error");
      //convertir el error en uno real
      throw error instanceof Error ? error : new Error(String(error));
    }
  };
  return { handleEventForm };
};
export default useOnSubmitFormRegister;
