"use client";

import z from "zod";

const useInputErrorZod = <T>(
  schema: z.ZodSchema<T>,
  form: T,
  setError: React.Dispatch<React.SetStateAction<Record<keyof T, string>>>,
) => {
  type Field = keyof T;
  // verificacion ZOD por input
  const validateField = ({ name, value }: { name: Field; value: T[Field] }) => {
    const result = schema.safeParse({ ...form, [name]: value });

    if (result.success) {
      // eliminar error si ahora está bien
      setError((prev) => ({ ...prev, [name]: "" }));
      return;
    }

    // buscar SOLO el error del campo actual
    const fieldError = result.error.issues.find(
      (issue) => issue.path[0] === name,
    );

    // setear o limpiar
    setError((prev) => ({
      ...prev,
      [name]: fieldError ? fieldError.message : "",
    }));
  };

  return {
    validateField,
  };
};
export default useInputErrorZod;
