"use client";

import { useAuth } from "../hooks/authContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function PrivateLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.replace("/inicio");
    }
  }, [loading, user]);

  if (loading) {
    return (
      <div className="flex gap-2 items-center">
        <svg className="inline mx-3 animate-spin border-2 size-3.5 rounded-full"></svg>
        <p className="text-black">Cargando...</p>
      </div>
    );
  }

  return <>{children}</>;
}
