import { z } from "zod";

z.config(z.locales.es());

const name = z
  .string("El nombre es obligatorio.")
  .min(2, "El nombre es obligatorio.")
  .max(38, "El nombre debe contener menos de 38 caracteres.");

const lastName = z
  .string("El apellido es obligatorio.")
  .min(1, "El apellido es obligatorio.")
  .max(39, "El apellido debe contener menos de 39 caracteres.");

export const email = z.email("Correo inválido.");

export const password = z
  .string("La contraseña es OBLIGATORIA.")
  .min(
    8,
    "La contraseña debe tener al menos 8 caracteres. Una letra mayúscula. Una letra minúscula. Un número. Un símbolo.",
  )
  .regex(/[A-Z]/, "Debe contener una letra mayúscula")
  .regex(/[a-z]/, "Debe contener una letra minúscula")
  .regex(/[0-9]/, "Debe contener un número")
  .regex(/[^A-Za-z0-9]/, "Debe contener un símbolo");

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
