import { useState } from "react";
import { TypeImagenes } from "./TypeImagenes";

const useCarrusel = (imagenes: TypeImagenes[]) => {
  const [index, setIndex] = useState(0);

  const handleCarrusel = (dir: "prev" | "next") => {
    const imageArrayLength = imagenes.length;
    if (dir === "prev") {
      const i = (index - 1 + imageArrayLength) % imageArrayLength;
      setIndex(i);
      return;
    }
    if (dir === "next") {
      const i = (index + 1) % imageArrayLength;
      setIndex(i);
      return;
    }
  };
  return { handleCarrusel, index, setIndex };
};
export default useCarrusel;
