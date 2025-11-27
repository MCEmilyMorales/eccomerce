"use client";
import dynamic from "next/dynamic";

const PageRegister = dynamic(
  () => import("@/features/usuario/register/components/PageRegister"),
);

const Registro = () => {
  return <PageRegister />;
};
export default Registro;
