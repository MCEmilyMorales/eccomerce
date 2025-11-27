"use client";

import dynamic from "next/dynamic";

const CartItem = dynamic(() => import("@/components/ecommerce/CartItem"));
const Carrito = () => {
  return (
    <>
      <CartItem />
    </>
  );
};
export default Carrito;
