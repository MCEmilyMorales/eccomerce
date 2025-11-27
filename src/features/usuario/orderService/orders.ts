import host from "@/services/apiBack";
import { OrdersType } from "./orders.type";

const Orders = async (orders: OrdersType) => {
  try {
    const bodyBack = {
      products: orders,
    };

    const resBack = await host.post("/orders", bodyBack, {
      withCredentials: true,
    });
    return resBack.data;
  } catch (error: unknown) {
    console.error("Error al cargar las ordenes:", error);
    throw error;
  }
};
export default Orders;
