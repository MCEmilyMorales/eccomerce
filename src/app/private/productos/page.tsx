"use client";

import dynamic from "next/dynamic";

const PageProducts = dynamic(
  () => import("@/features/productos/components/PageProducts"),
);
const Productos = () => {
  return (
    <>
      <PageProducts />
    </>
  );
};
export default Productos;
