"use client";

import { useAuth } from "../hooks/authContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function PrivateLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const { loading } = useAuth();

  if (loading) {
    return (
      <div className="flex items-center gap-2">
        <svg className="size-4 animate-spin border-2 rounded-full"></svg>
        <p>Cargando...</p>
      </div>
    );
  }

  return <>{children}</>;
}
