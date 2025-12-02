import host from "@/services/apiBack";

export const Products = async () => {
  try {
    console.log("5️⃣ cuantas veces llame a este metodo??");

    const productsBack = await host.get("/products", {
      withCredentials: true,
    });

    return productsBack.data;
  } catch (error: unknown) {
    console.error("Error en metodo de conseguir productos", error);
    throw error;
  }
};

export const ProductId = async (id: string) => {
  try {
    const productBack = await host.get(`products/${id}`, {
      withCredentials: true,
    });
    return productBack;
  } catch (error: unknown) {
    console.error("error al conseguir el producto ", error);
    throw error;
  }
};
