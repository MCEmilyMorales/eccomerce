"use client";

import Image from "next/image";
import FormRegister from "./FormRegister";
import Link from "next/link";
import Titule from "@/components/ui/Titule";

const PageRegister = () => {
  return (
    <>
      <div className="min-h-screen bg-violet-05 shadow-xl md:grid md:grid-cols-2">
        {/** vista pc */}
        <div className="hidden md:block md:col-start-1 md:bg-violet-4 md:w-full">
          <Image
            src={"/clothes.svg"}
            alt="fibonacci"
            width={800}
            height={100}
          />
        </div>
        <div className="md:col-start-2">
          {/** titulo */}
          <div className="py-8 flex flex-col justify-center items-center">
            <Titule text="REGISTER" />
            <h2 className="text-lg text-gray-400">
              Enter your information to register
            </h2>
            <h3 className="text-lg text-gray-300 hover:text-gray-400 ">
              Are you registered?
              <Link className="text-violet-400 font-medium" href={"/inicio"}>
                {" "}
                Log in{" "}
              </Link>
            </h3>
          </div>
          <FormRegister />
        </div>
      </div>
    </>
  );
};
export default PageRegister;
