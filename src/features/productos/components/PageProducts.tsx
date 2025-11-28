import { Product } from "@/services/productsService/productsData.type";
import { Fragment, useEffect, useState } from "react";
// import getProductos from "../getProductos";
import ProductCard from "@/components/ecommerce/ProductCard";

const PageProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  //* recibe toda la lista de productos del back
  // useEffect(() => {
  //   getProductos().then(setProducts);
  // }, []);
  //* recibe toda la lista de productos del frontapiroute
  useEffect(() => {
    fetch("/api/products", { credentials: "include" })
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error(err));
  }, []);
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
