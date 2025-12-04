import { Products } from "@/services/productsService/products";
import { AxiosError } from "axios";

const getProductos = async () => {
  try {
    const valor = await Products();
    return valor;
  } catch (error: unknown) {
    console.error("Error al conseguir la lista de productos", error);
    if (error instanceof AxiosError) {
      throw error;
    }
  }
};
export default getProductos;
