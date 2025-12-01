import Image from "next/image";
import { useState } from "react";

import Input from "@/components/ui/Input";
import { LoginData } from "@/services/loginService/loginData.type";
import Button from "@/components/ui/Button";
import useInputChange from "@/features/usuario/login/hooks/useInputChange";
import useInputErrorZod from "@/features/usuario/login/hooks/useInputErrorZod";
import { loginSchema } from "@/services/loginService/login.zod";
import useOnSubmitFormLogin from "@/features/usuario/login/hooks/useOnSubmitFormLogin";
import Label from "@/components/ui/Label";

const FormLogin = () => {
  const initialLoginForm: LoginData = {
    email: "",
    password: "",
  };
  //Tomo los valores en tiempo real de los input del form
  const [login, setLogin] = useState<LoginData>(initialLoginForm);
  const { form: loginForm, handleChange } = useInputChange(login, setLogin);

  //verifico errores en ZOD;
  const [errors, setErrors] = useState<Record<string, string>>({});

  const { validateField } = useInputErrorZod(loginSchema, login, setErrors);

  //envio FORMULARIO al servidor
  const { handleFormLogin } = useOnSubmitFormLogin();

  return (
    <>
      <form
        onSubmit={(e) => handleFormLogin(e, login)}
        className="col-start-2 px-8 pt-8 pb-16"
      >
        <div>
          <Label text="Email" htmlFor="" />
          <div className="relative">
            <Input
              name="email"
              value={loginForm.email}
              onChange={(e) => {
                handleChange(e);
                validateField({
                  name: e.target.name as "email",
                  value: e.target.value,
                });
              }}
              type="email"
              placeholder="email@example.com"
              autoComplete="email"
              required
            />
            <Image
              src={"email.svg"}
              alt="email"
              width={30}
              height={30}
              className="absolute top-1/2 left-3 w-5 h-5 -translate-y-1/2"
            />
          </div>
          {errors.email && (
            <span className="text-red-400"> {errors.email}</span>
          )}
        </div>
        <div className="pt-6 pb-8">
          <Label text="Password" htmlFor="" />
          <div className="relative">
            <Input
              name="password"
              value={loginForm.password}
              onChange={(e) => {
                handleChange(e);
                validateField({
                  name: e.target.name as "password",
                  value: e.target.value,
                });
              }}
              type="password"
              placeholder="***********"
              autoComplete="current-password"
              required
            />
            <Image
              src={"padlock.svg"}
              alt="padlock"
              width={30}
              height={30}
              className="absolute top-1/2 left-3 w-5 h-5 -translate-y-1/2"
            />
          </div>
          {errors.password && (
            <span className="text-red-400">{errors.password}</span>
          )}
        </div>
        <Button text="SIGN IN" type="submit" />
      </form>
    </>
  );
};
export default FormLogin;
