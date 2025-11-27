import Image from "next/image";
import { Fragment, useState } from "react";

import { Datos } from "@/services/registerService/datos.types";
import useOnSubmitFormRegister from "../hooks/useOnSubmitFormRegister";
import Label from "@/components/ui/Label";
import Input from "@/components/ui/Input";
import useInputChange from "../../login/hooks/useInputChange";
import useInputErrorZod from "../../login/hooks/useInputErrorZod";
import { registerSchema } from "@/services/registerService/datos.zod";

const FormRegister = () => {
  const Form = {
    name: "",
    lastName: "",
    email: "",
    password: "",
    address: "",
    phone: 0,
    country: "",
    city: "",
  };
  const [datos, setDatos] = useState<Datos>(Form);

  const label = [
    {
      label: "First name",
      name: "name",
      type: "text",
      value: datos.name,
      src: "user.svg",
      alt: "user",
    },
    {
      label: "Last name",
      name: "lastName",
      type: "text",
      value: datos.lastName,
      src: "user.svg",
      alt: "last name",
    },
    {
      label: "Email",
      name: "email",
      type: "email",
      value: datos.email,
      src: "email.svg",
      alt: "email",
      autoComplete: "email",
    },
    {
      label: "Password",
      name: "password",
      type: "password",
      value: datos.password,
      src: "padlock.svg",
      alt: "padlock",
      autoComplete: "current-password",
    },
    {
      label: "Address",
      name: "address",
      type: "text",
      value: datos.address,
      src: "address.svg",
      alt: "address",
    },
    {
      label: "Phone",
      name: "phone",
      type: "tel",
      value: datos.phone,
      src: "smartphone.svg",
      alt: "number phone",
    },
    {
      label: "Country",
      name: "country",
      type: "text",
      value: datos.country,
      src: "flag.svg",
      alt: "user",
    },
    {
      label: "City",
      name: "city",
      type: "text",
      value: datos.city,
      src: "city.svg",
      alt: "user",
    },
  ];
  const { form, handleChange } = useInputChange(datos, setDatos);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const { validateField } = useInputErrorZod(registerSchema, form, setErrors);
  //envia los datos para registrar usuario
  const { handleEventForm } = useOnSubmitFormRegister();

  return (
    <>
      {/* FORMULARIO DE REGISTRO */}
      <form
        onSubmit={(e) => handleEventForm(e, datos)}
        className="py-8 px-6 grid grid-cols-4 gap-8"
      >
        {/* inputs */}
        {label.map((l) => (
          <Fragment key={l.name}>
            <div
              className={
                l.name === "lastName"
                  ? "col-start-3 col-end-5"
                  : l.name === "name"
                  ? "col-start-1 col-end-3"
                  : "col-start-1 col-end-5"
              }
            >
              <Label text={l.label} htmlFor="" />
              <div className="relative">
                <Input
                  onChange={(e) => {
                    handleChange(e),
                      validateField({
                        name: e.target.name as keyof Datos,
                        value: e.target.value,
                      });
                  }}
                  name={l.name}
                  value={l.value}
                  type={l.type}
                  placeholder={l.name}
                  autoComplete={l.autoComplete}
                  required
                />
                <Image
                  src={`/${l.src}`}
                  alt={l.alt}
                  width={30}
                  height={30}
                  className="absolute top-1/2 left-3 w-5 h-5 -translate-y-1/2"
                />
              </div>
              {errors[l.name] && (
                <span className="text-red-400"> {errors[l.name]}</span>
              )}
            </div>
          </Fragment>
        ))}
        <button
          type="submit"
          className="cursor-pointer rounded-lg py-3 mt-8 col-start-1 col-span-4 w-full font-semibold bg-violet-4 hover:bg-violet-5 focus:bg-violet-5 text-white"
        >
          REGISTER NOW
        </button>
      </form>
    </>
  );
};
export default FormRegister;
