import { z } from "zod";

z.config(z.locales.es());

const name = z
  .string("El nombre es obligatorio.")
  .min(2)
  .max(38, "El apellido debe contener menos de 38 caracteres.");

const lastName = z
  .string("El apellido es obligatorio.")
  .min(1)
  .max(39, "El apellido debe contener menos de 39 caracteres.");

export const email = z.email("Correo inválido.");

export const password = z
  .string("La contraseña es OBLIGATORIA.")
  .min(8, "La contraseña debe tener al menos 8 caracteres.");

const address = z
  .string("La dirección es obligatoria.")
  .min(3, "Debe contener 3 o mas letras")
  .max(80, "Hasta 80 caracteres.");

const phone = z
  .string("Número de teléfono obligatorio")
  .min(7, "Número de teléfono demasiado corto.")
  .regex(/^\d+$/, "Debe contener solo números.")
  .transform((val) => Number(val));

const country = z
  .string("Opcional")
  .min(4, "El pais debe tener al menos 4 caracteres.")
  .max(20, "El pais debe tener menos de 20 caracteres.")
  .optional();

const city = z
  .string("Opcional")
  .min(5, "La ciudad debe contener al menos 5 caracteres.")
  .max(20, "La ciudad debe contener menos de 20 caracteres.")
  .optional();

export const registerSchema = z.object({
  name,
  lastName,
  email,
  password,
  address,
  phone,
  country,
  city,
});

export type RegisterData = z.infer<typeof registerSchema>;
