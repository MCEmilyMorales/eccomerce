"use client";
import Image from "next/image";
import Link from "next/link";

import useLogout from "@/features/usuario/logout/useLogout";

const Navbar = () => {
  const { handleLogout, user } = useLogout();
  const userAutorizado = user?.includes("isLoggedIn=true");

  return (
    <>
      {/* Vista de PC */}
      <nav>
        <div className="grid grid-cols-2 py-4 px-6">
          <div className="flex flex-row items-center space-x-10 ">
            <Image
              src={"/tag_price.svg"}
              alt="Icon de la empresa"
              height={30}
              width={30}
            />
            <h1 className="font-bold tracking-[.25em]"> Estilo </h1>
          </div>
          {/* INICIO DE SESION */}
          {userAutorizado ? (
            <ul className="flex flex-row justify-around list-none">
              <li className="hover:font-bold focus:font-bold">
                <Link href={"/"}> Home </Link>
              </li>

              <li className="hover:font-bold focus:font-bold">
                <Link href={"/private/panel/"}> Products </Link>
              </li>

              <li className="hover:font-bold focus:font-bold">
                <Link href={"/private/panel/carrito"}> Cart </Link>
              </li>

              <li className="hover:font-bold focus:font-bold">
                <Link onClick={(e) => handleLogout(e)} href={"/"}>
                  {" "}
                  Logout{" "}
                </Link>
              </li>
            </ul>
          ) : (
            <>
              <ul className="flex flex-row justify-around list-none">
                <li className="hover:font-bold focus:font-bold">
                  <Link href={"/"}> Home </Link>
                </li>
                <li className="hover:font-bold focus:font-bold">
                  <Link href={"/productos"}> Products </Link>
                </li>
                <li className="hover:font-bold focus:font-bold">
                  <Link href={"/registro"}> Register </Link>
                </li>
                <li className="hover:font-bold focus:font-bold">
                  <Link href={"/inicio"}> Sign In </Link>
                </li>
              </ul>
            </>
          )}
        </div>
      </nav>
    </>
  );
};
export default Navbar;
