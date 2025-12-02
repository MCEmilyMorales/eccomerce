"use client";

import { Product } from "@/services/productsService/productsData.type";
import { Fragment, useEffect, useState } from "react";
import getProductos from "../getProductos";
import ProductCard from "@/components/ecommerce/ProductCard";

const PageProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const hasCookie = document.cookie.includes("isLoggedIn=true");

    if (hasCookie) {
      getProductos().then(setProducts);
    } else {
      console.warn("🍪 Cookie no disponible aún");
      // Opcional: reintentar luego de un delay
      setTimeout(() => {
        getProductos().then(setProducts);
      }, 1000);
    }
  }, []);

  console.log("paso 2️⃣: llama a getProducts()", products);

  if (!products) return <div>Cargando productos...</div>;
  console.log("paso 3️⃣ : tiene productos?", products);

  return (
    <>
      <div className="relative px-4 grid sm:grid-cols-2 md:grid-cols-4 md:gap-8 justify-items-center">
        {products.map((p) => (
          <Fragment key={p.id}>
            <ProductCard
              name={p.name}
              price={p.price}
              imgUrl={p.imgUrl}
              id={p.id}
            />
          </Fragment>
        ))}
      </div>
    </>
  );
};
export default PageProducts;
