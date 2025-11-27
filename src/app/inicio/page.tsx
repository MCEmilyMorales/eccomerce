"use client";

import dynamic from "next/dynamic";

const PageLogin = dynamic(
  () => import("@/features/usuario/login/components/PageLogin"),
);

const Inicio = () => {
  return (
    <>
      <PageLogin />
    </>
  );
};
export default Inicio;
