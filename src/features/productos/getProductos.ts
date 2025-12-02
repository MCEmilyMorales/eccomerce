import { Products } from "@/services/productsService/products";
import { AxiosError } from "axios";

const getProductos = async () => {
  try {
    console.log("paso 4️⃣ : llama al metodo de Products que llama al back?");

    return await Products();
  } catch (error: unknown) {
    console.error("Error al conseguir la lista de productos", error);
    if (error instanceof AxiosError) {
      throw error;
    }
  }
};
export default getProductos;
