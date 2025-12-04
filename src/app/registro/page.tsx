"use client";

import Loading from "@/components/ui/Loading";
import PageRegister from "@/features/usuario/register/components/PageRegister";
import { useState } from "react";

const Registro = () => {
  const [loading, setLoading] = useState(true);
  loading && <Loading />;

  return <PageRegister />;
};
export default Registro;
