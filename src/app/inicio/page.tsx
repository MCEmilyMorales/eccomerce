"use client";

import Loading from "@/components/ui/Loading";
import PageLogin from "@/features/usuario/login/components/PageLogin";
import { useState } from "react";

const Inicio = () => {
  const [loading, setLoading] = useState(true);
  loading && <Loading />;

  return (
    <>
      <PageLogin />
    </>
  );
};
export default Inicio;
