"use client";

import { Product } from "@/services/productsService/productsData.type";
import { Fragment } from "react";
import ProductCard from "@/components/ecommerce/ProductCard";

type Props = {
  products: Product[];
};

const PageProducts = ({ products }: Props) => {
  return (
    <>
      <div className="relative px-4 grid sm:grid-cols-2 md:grid-cols-4 md:gap-8 justify-items-center">
        {!products.length ? (
          <div>Cargando productos...</div>
        ) : (
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
        )}
      </div>
    </>
  );
};
export default PageProducts;
