import { Products } from "@/services/productsService/products";
import { AxiosError } from "axios";

const getProductos = async () => {
  try {
    console.log("paso 4️⃣ : llama al metodo de Products que llama al back?");
    const valor = await Products();
    console.log(
      "paso 4️⃣ : devolucion del metodo de Products que llama al back:",
      valor,
    );
    return valor;
  } catch (error: unknown) {
    console.error("Error al conseguir la lista de productos", error);
    if (error instanceof AxiosError) {
      throw error;
    }
  }
};
export default getProductos;
