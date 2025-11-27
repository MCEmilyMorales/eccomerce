import host from "@/services/apiBack";
import { AxiosError } from "axios";

const Refresh = async () => {
  try {
    const res = await host.post("/auth/refresh", {}, { withCredentials: true });

    return res.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      throw error;
    }
    throw new Error("Error desconocido en refresh.");
  }
};
export default Refresh;
