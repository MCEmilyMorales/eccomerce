"use client";

import { useCart } from "@/app/hooks/cartContext";
import { useToast } from "@/app/hooks/toastContext";
import Orders from "@/features/usuario/orderService/orders";
import { AxiosError } from "axios";
import Image from "next/image";
import { Fragment } from "react";

const CartItem = () => {
  const { addToast } = useToast();
  const { cart, uploadProductCart, deleteProductCart, clearCart } = useCart();
  const amounts = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

  const handleChangeAmount = (
    id: string,
    amountStr: string,
    priceStr: string,
  ) => {
    const quantity = Number(amountStr);
    const subtotalCalculation = (quantity * Number(priceStr)).toFixed(2);

    const productToUpdate = cart.find((p) => p.id === id);

    if (productToUpdate) {
      uploadProductCart(id, {
        quantity: amountStr,
        subTotal: subtotalCalculation,
      });
    }
  };
  //calculo front del total
  const total = cart.reduce((acc, item) => {
    const suma = acc + Number(item.subTotal);
    return suma;
  }, 0);

  const handleBuy = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      const quantityAndProduct = cart.map((p) => {
        return { id: p.id, quantity: Number(p.quantity) };
      });
      if (!quantityAndProduct.length) {
        addToast(
          "Por favor carga productos al carrito si deseas comprar.",
          "warning",
        );
        return;
      }

      const resBack = await Orders(quantityAndProduct);
      addToast(`Compra exitosa. Total de compra ${resBack?.total}`, "success");
      clearCart();
      return;
    } catch (error: unknown) {
      if (error instanceof AxiosError) {
        const msg = error.response?.data.message;
        addToast(msg, "error");
        throw new Error(msg);
      }
      throw error;
    }
  };
  return (
    <>
      <div className="px-8 py-12 bg-violet-05">
        <table className="w-full">
          <thead className="border-b-2 border-violet-4 ">
            <tr>
              <th className="px-5 py-3 border-gray-300">IMAGE</th>
              <th className="px-5 py-3 border-gray-300  ">PRODUCT</th>
              <th className="px-5 py-3 border-gray-300">AMOUNT</th>
              <th className="px-5 py-3 border-gray-300  ">SUBTOTAL</th>
              <th className="px-5 py-3 border-gray-300  ">ELIMINAR</th>
            </tr>
          </thead>
          <tbody className="text-center border-b-[1] border-violet-4">
            {cart.length === 0 && cart ? (
              <tr>
                <td> ... sin productos </td>
              </tr>
            ) : (
              cart.map((p) => (
                <Fragment key={p.id}>
                  <tr>
                    {/* imagen  */}
                    <td className="relative py-8 flex items-center justify-center">
                      <Image src={p.img} alt="img" width={32} height={32} />
                    </td>
                    {/* nombre del producto  */}
                    <td className="pl-2">{p.name}</td>
                    {/* cantidad  */}

                    <td>
                      <select
                        id="amount"
                        value={p.quantity}
                        onChange={(e) =>
                          handleChangeAmount(p.id, e.target.value, p.price)
                        }
                      >
                        {amounts.map((amount) => (
                          <option key={amount} value={amount}>
                            {amount}
                          </option>
                        ))}
                      </select>
                    </td>

                    {/* subTotal  */}
                    <td>${p.subTotal}</td>
                    {/* eliminar producto  */}
                    <td>
                      <button
                        onClick={() => deleteProductCart(p.id)}
                        type="submit"
                        className="cursor-pointer "
                      >
                        <Image
                          src={"/trash.svg"}
                          alt="trash"
                          height={30}
                          width={30}
                        />
                      </button>
                    </td>
                  </tr>
                </Fragment>
              ))
            )}
          </tbody>
        </table>
        <div>
          <hr className="mt-2 border-b-[1] border-violet-5" />
        </div>
        <p className="text-end px-4 font-bold py-3">
          TOTAL: ${total.toFixed(2)}
        </p>
        <div className="text-center">
          <button
            onClick={handleBuy}
            type="submit"
            className="w-1/3 mt-2 text-white font-semibold cursor-pointer py-3 rounded-xl bg-violet-4 hover:bg-violet-5"
          >
            COMPRAR
          </button>
        </div>
      </div>
    </>
  );
};

export default CartItem;
