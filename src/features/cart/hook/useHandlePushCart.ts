import { useAuth } from "@/app/hooks/authContext";
import { useCart } from "@/app/hooks/cartContext";
import { useToast } from "@/app/hooks/toastContext";
import { Product } from "@/services/productsService/productsData.type";

const useHandlePushCart = (p: Product) => {
  const { cart, addProductCart } = useCart();
  const { user } = useAuth();
  const { addToast } = useToast();
  const handlePushCart = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (!user) {
      addToast("Por favor inicia sesión para cargar el producto.");
      return;
    }
    //el producto existe?? envio un alerta
    const productExists = cart.some((item) => item.id === p.id);

    if (productExists) {
      addToast("El producto ya se encuentra en el carrito.", "warning");
      return;
    }

    // agregar nuevo item
    addProductCart({
      id: p.id,
      name: p.name,
      img: p.imgUrl,
      price: p.price,
      quantity: "1",
      subTotal: String(Number(p.price) * 1),
    });
    addToast("Felicidades. Agregaste el producto al carrito.");
  };

  return { handlePushCart };
};
export default useHandlePushCart;
