import z from "zod";
import { loginSchema } from "./login.zod";

export type LoginData = z.infer<typeof loginSchema>;
