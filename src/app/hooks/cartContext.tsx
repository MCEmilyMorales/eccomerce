"use client";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

type CartItem = {
  id: string;
  name: string;
  img: string;
  price: string;
  quantity: string;
  subTotal: string;
};

type CartContextType = {
  cart: CartItem[];
  addProductCart: (item: CartItem) => void;
  uploadProductCart: (
    idProduct: string,
    upload: Pick<CartItem, "quantity" | "subTotal">,
  ) => void;
  deleteProductCart: (idProduct: string) => void;
  clearCart: () => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  //guardar el carro nuevo en el localStorage
  useEffect(() => {
    const stored = localStorage.getItem("cart");
    if (stored) setCart(JSON.parse(stored));
  }, []);

  // guardar el carro cuando cambie
  useEffect(() => {
    if (cart.length > 0) {
      localStorage.setItem("cart", JSON.stringify(cart));
    } else {
      localStorage.removeItem("cart");
    }
  }, [cart]);
  const addProductCart = (cartItem: CartItem) => {
    setCart((prev) => [...prev, cartItem]);
  };
  //modificar este metodo que actualiza
  const uploadProductCart = (
    idProduct: string,
    upload: Pick<CartItem, "quantity" | "subTotal">,
  ) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === idProduct ? { ...item, ...upload } : item,
      ),
    );
  };

  const deleteProductCart = (idProduct: string) => {
    setCart((prev) => prev.filter((p) => p.id !== idProduct));
  };

  const clearCart = () => setCart([]);

  return (
    <CartContext.Provider
      value={{
        cart,
        addProductCart,
        uploadProductCart,
        deleteProductCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used inside CartProvider");
  return context;
};
