"use client";

import { useAuth } from "@/app/hooks/authContext";
import PageProducts from "@/features/productos/components/PageProducts";

const Productos = () => {
  const { loading } = useAuth();

  if (loading) {
    return (
      <div className="flex items-center gap-2">
        <svg className="size-4 animate-spin border-2 rounded-full"></svg>
        <p>Cargando...</p>
      </div>
    );
  }
  return (
    <>
      <PageProducts />
    </>
  );
};
export default Productos;
