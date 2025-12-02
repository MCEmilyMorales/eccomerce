"use client";

import PageProducts from "@/features/productos/components/PageProducts";
import getProductos from "@/features/productos/getProductos";
import { useEffect, useState } from "react";
import { Product } from "@/services/productsService/productsData.type";

const Productos = () => {
  const [productos, setProductos] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getProductos(); // 👈 obtenés los datos
      setProductos(data); // 👈 los guardás en el estado
      console.log("1️⃣B: que obtengo en productos?", data);
    };

    fetchProducts();
  }, []);

  console.log("redireccion 1️⃣A: pagina de productos", productos.length);

  return (
    <>
      <PageProducts products={productos} />
    </>
  );
};

export default Productos;
