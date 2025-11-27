import z from "zod";
import { email, password } from "../registerService/datos.zod";

export const loginSchema = z.object({
  email,
  password,
});
