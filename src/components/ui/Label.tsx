const Label = ({ text, htmlFor }: { text: string; htmlFor: string }) => {
  return (
    <>
      <label htmlFor={htmlFor} className="text-gray-500 text-sm">
        {text}
      </label>
    </>
  );
};
export default Label;
