import { LoginData } from "./loginData.type";
import { loginSchema } from "./login.zod";
import host from "@/services/apiBack";

const Login = async (loginData: LoginData) => {
  try {
    //verifico con zod nuevamente
    const loginVerified = loginSchema.parse(loginData);
    console.log("host de login", host);

    //uso la api del front
    const answer = await host.post("auth/signin", loginVerified, {
      withCredentials: true,
    });

    if (answer.data.success) {
      //tengo que decirle al front cual es la cookie para que pueda moverse entre componentes
      // answer.headers["set-cookie"];
      return answer.data.accessToken;
    }
  } catch (error: unknown) {
    console.log("API URL:", process.env.NEXT_PUBLIC_API_URL);
    console.error("Error 🏃‍♂️", error);
    throw error;
  }
};
export default Login;
