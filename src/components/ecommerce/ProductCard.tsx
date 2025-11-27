import Image from "next/image";

import useHandlePushCart from "@/features/cart/hook/useHandlePushCart";
import { Product } from "@/services/productsService/productsData.type";

const ProductCard = (p: Product) => {
  const { handlePushCart } = useHandlePushCart(p);
  // cart de producto
  return (
    <>
      <div className="block rounded-xl w-72 mt-6 bg-violet-05">
        <div className="relative bg-cover bg-no-repeat flex items-center w-72 h-80 overflow-hidden rounded-xl">
          <Image src={p.imgUrl} alt={p.name} fill />
        </div>
        <div className="px-2 py-2 space-y-3">
          <p className="font-semibold text-foreground">{p.name}</p>
          <p className="text-foreground">
            Precio <span>${p.price}</span>
          </p>
          <button
            onClick={(e) => handlePushCart(e)}
            type="submit"
            className="mt-2 text-white font-semibold cursor-pointer py-3 w-full rounded-xl bg-violet-4 hover:bg-violet-5"
          >
            Agregar al carrito
          </button>
        </div>
      </div>
    </>
  );
};
export default ProductCard;
