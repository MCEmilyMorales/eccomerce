"use client";

import Loading from "@/components/ui/Loading";
import PageProducts from "@/features/productos/components/PageProducts";
import getProductos from "@/features/productos/getProductos";
import { Product } from "@/services/productsService/productsData.type";
import { useEffect, useState } from "react";

const Productos = () => {
  const [loading, setLoading] = useState(true);
  loading && <Loading />;

  const [productos, setProductos] = useState<Product[] | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getProductos();
      setProductos(data);
    };
    fetchProducts();
  }, []);

  return (
    <>
      {!productos?.length ? <Loading /> : <PageProducts products={productos} />}
    </>
  );
};

export default Productos;
