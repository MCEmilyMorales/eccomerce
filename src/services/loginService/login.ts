import { LoginData } from "./loginData.type";
import { loginSchema } from "./login.zod";
import host from "@/services/apiBack";

const Login = async (loginData: LoginData) => {
  try {
    //verifico con zod nuevamente
    const loginVerified = loginSchema.parse(loginData);

    //uso la api del front
    const answer = await host.post("auth/signin", loginVerified, {
      withCredentials: true,
    });

    if (answer.data.success) {
      // answer.headers["set-cookie"];
      return answer.data.accessToken;
    }
  } catch (error: unknown) {
    console.error("Error 🏃‍♂️", error);
    throw error;
  }
};
export default Login;
