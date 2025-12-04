"use client";

import PageProducts from "@/features/productos/components/PageProducts";
import getProductos from "@/features/productos/getProductos";
import { Product } from "@/services/productsService/productsData.type";
import { useEffect, useState } from "react";

const Productos = () => {
  const [productos, setProductos] = useState<Product[] | null>(null);
  console.log("despues del login llama a la page de products");

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getProductos();
      setProductos(data);
    };
    fetchProducts();
  }, []);

  if (!productos) return <p>Cargando productos...</p>;

  return <PageProducts products={productos} />;
};

export default Productos;
