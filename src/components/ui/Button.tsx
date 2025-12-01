const Button = ({
  text,
  type,
}: {
  text: string;
  type: "submit" | "reset" | "button" | undefined;
}) => {
  return (
    <>
      <button
        type={type}
        className="text-background cursor-pointer rounded-lg py-3 mt-8 w-full font-semibold bg-violet-4 hover:bg-violet-5 focus:bg-violet-5"
      >
        {text}
      </button>
    </>
  );
};
export default Button;
