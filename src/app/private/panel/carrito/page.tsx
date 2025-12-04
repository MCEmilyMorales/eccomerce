"use client";

import CartItem from "@/components/ecommerce/CartItem";
import Loading from "@/components/ui/Loading";
import { useState } from "react";

const Carrito = () => {
  const [loading, setLoading] = useState(true);
  loading && <Loading />;

  return (
    <>
      <CartItem />
    </>
  );
};
export default Carrito;
