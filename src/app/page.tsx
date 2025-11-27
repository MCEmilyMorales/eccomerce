"use client";
import Image from "next/image";
import Link from "next/link";

import { TypeImagenes } from "@/features/carrusel/TypeImagenes";
import useCarrusel from "@/features/carrusel/useCarrusel";
import { useEffect } from "react";
import carruselRef from "@/features/carrusel/carruselRef";

export default function Home() {
  const imagenes: TypeImagenes[] = [
    {
      src: "/img6.jpeg",
      alt: "imagen de portada",
    },
    {
      src: "/img7.jpeg",
      alt: "imagen 7 de portada",
    },
    {
      src: "/img8.jpeg",
      alt: "imagen 8 de portada",
    },
    {
      src: "/img9.jpeg",
      alt: "imagen 9 de portada",
    },
  ];
  //logica del carrusel de imagenes de portada
  const { handleCarrusel, index, setIndex } = useCarrusel(imagenes);

  const { isVisible, carruselRefPrueba } = carruselRef();
  useEffect(() => {
    if (!isVisible) return; // ⬅️ no está visible → NO avanza
    console.log("avanza?");

    const timer = setTimeout(() => {
      setIndex((prev) => (prev + 1) % imagenes.length);
    }, 10000);

    return () => clearTimeout(timer);
  }, [index, isVisible]);

  return (
    <>
      <div className="relative w-full h-90 md:h-130">
        {/* Botón izquierdo */}
        <div ref={carruselRefPrueba}>
          <div
            onClick={() => handleCarrusel("prev")}
            id="<"
            className="absolute top-1/2 -translate-y-1/2 left-2 z-40 box-content size-18 rounded-lg hover:bg-violet-500 cursor-pointer font-black text-white text-6xl text-center"
          >
            {"<"}
          </div>
          {/* Carrusel de Imagenes */}
          <div className="absolute w-full h-full">
            <Image
              src={imagenes[index].src}
              alt={imagenes[index].alt}
              className="z-0 rounded-lg"
              fill
            />
          </div>
          {/* Botón derecho */}
          <div
            onClick={() => handleCarrusel("next")}
            id=">"
            className="absolute top-1/2 -translate-y-1/2 right-2 z-40 box-content size-18 rounded-lg hover:bg-violet-5 cursor-pointer font-black text-white text-6xl text-center"
          >
            {">"}
          </div>
        </div>
      </div>
      {/* Redireccion a productos si esta logueado */}
      <Link href={"/private/productos"}>
        <div className="flex flex-col items-center bg-violet-05 pb-14">
          <div className="w-full mt-2 text-white text-center font-semibold cursor-pointer py-3 rounded-xl bg-violet-4 hover:bg-violet-5">
            <button>SHOP NOW</button>
          </div>
        </div>
      </Link>
    </>
  );
}
