import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

const Input = (props: InputProps) => {
  return (
    <>
      <input
        className="appearance-none py-2 pl-10 pr-2 text-gray-5 border-3 focus:outline-none focus:border-violet-4 border-gray-2 rounded-lg w-full"
        {...props}
      />
    </>
  );
};
export default Input;
