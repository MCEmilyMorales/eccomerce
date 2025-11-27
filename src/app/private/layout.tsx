"use client";

import { useAuth } from "../hooks/authContext";

export default function PrivateLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { user, loading } = useAuth();

  if (loading)
    return (
      <>
        <svg className="inline mx-3 animate-spin border-2 size-3.5 rounded-4xl"></svg>
        <p className="inline text-black">Cargando...</p>
      </>
    );

  if (!user) return <p>No autorizado</p>;

  return <>{children}</>;
}
