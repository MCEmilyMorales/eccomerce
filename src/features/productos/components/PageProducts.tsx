"use client";

import { Product } from "@/services/productsService/productsData.type";
import { Fragment } from "react";
import ProductCard from "@/components/ecommerce/ProductCard";

type Props = {
  products: Product[];
};

const PageProducts = ({ products }: Props) => {
  console.log("paso 2️⃣: llama a getProducts()", products);

  if (!products.length) return <div>Cargando productos 🙂 </div>;
  console.log("paso 3️⃣ : tiene productos?", products);

  return (
    <>
      <div className="relative px-4 grid sm:grid-cols-2 md:grid-cols-4 md:gap-8 justify-items-center">
        {products.length ? (
          products.map((p) => (
            <Fragment key={p.id}>
              <ProductCard
                name={p.name}
                price={p.price}
                imgUrl={p.imgUrl}
                id={p.id}
              />
            </Fragment>
          ))
        ) : (
          <>
            <div>Cargando productos...</div>
          </>
        )}
      </div>
    </>
  );
};
export default PageProducts;
