import host from "@/services/apiBack";
import { Datos } from "./datos.types";
import { registerSchema } from "./datos.zod";

export const Register = async (datos: Datos) => {
  try {
    //valido datos con ZOD
    const parsed = registerSchema.parse(datos);

    const { name, lastName, phone, email, password, address, country, city } =
      parsed;

    const datosValidos = {
      phone: Number(phone),
      name: `${name} ${lastName}`,
      email,
      password,
      address,
      country,
      city,
    };

    const response = await host.post("/auth/signup", datosValidos, {
      withCredentials: true,
    });

    return response.data;
  } catch (error: unknown) {
    console.error("Error 📔 🖊 ", error);
    throw error;
  }
};
