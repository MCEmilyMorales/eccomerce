import Titule from "@/components/ui/Titule";
import FormLogin from "./FormLogin";
import Link from "next/link";

const PageLogin = () => {
  return (
    <>
      {/** titulo */}
      <div className="min-h-screen bg-violet-05 md:grid md:grid-cols-3 shadow-xl rounded-md">
        <div className="col-start-2 py-8 flex flex-col justify-center items-center">
          <Titule text="SIGN IN" />
          <h2 className="text-lg text-gray-400 hover:text-gray-500">
            You are not registered?
            <Link className="text-violet-400 font-medium" href={"/registro"}>
              {" "}
              Registered{" "}
            </Link>
          </h2>
        </div>
        {/** formulario */}
        <FormLogin />
      </div>
    </>
  );
};
export default PageLogin;
