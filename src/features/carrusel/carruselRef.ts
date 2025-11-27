import { useEffect, useRef, useState } from "react";
const carruselRef = () => {
  const carruselRefPrueba = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!carruselRefPrueba.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        setIsVisible(entries[0].isIntersecting);
      },
      { threshold: 0.5 }, // 50% visible para activarse
    );

    observer.observe(carruselRefPrueba.current);

    return () => observer.disconnect();
  }, []);
  return {
    isVisible,
    setIsVisible,
    carruselRefPrueba,
  };
};
export default carruselRef;
