"use client";

import React from "react";

const useInputChange = <T>(
  form: T,
  setForm: React.Dispatch<React.SetStateAction<T>>,
) => {
  const handleChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    const { name, type } = event.target;

    const value =
      type === "checkbox"
        ? (event.target as HTMLInputElement).checked
        : event.target.value;

    //guardo los valores en el useState que recibo por param
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  //retorno el formulario
  return {
    form,
    handleChange,
  };
};
export default useInputChange;
