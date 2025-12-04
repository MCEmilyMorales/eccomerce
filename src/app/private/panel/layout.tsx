"use client";

export default function PanelLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* Contenido privado */}
      <main>{children}</main>
    </>
  );
}
