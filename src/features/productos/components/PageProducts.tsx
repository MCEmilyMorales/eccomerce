"use client";

import { Product } from "@/services/productsService/productsData.type";
import { Fragment, useEffect, useState } from "react";
import getProductos from "../getProductos";
import ProductCard from "@/components/ecommerce/ProductCard";
import { useAuth } from "@/app/hooks/authContext";

const PageProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const { user } = useAuth();
  console.log("paso dentro de pagina de productos", products);

  //* recibe toda la lista de productos del back
  useEffect(() => {
    if (!user) return;
    getProductos().then(setProducts);
  }, [user]);

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
