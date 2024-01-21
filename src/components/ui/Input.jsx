import Message from "./Message";

const Input = (props) => {
  const { htmlFor, error, type = "text", ...restProps } = props;

  return (
    <div className="w-full">
      <label htmlFor={htmlFor} className="block mb-1">
        {htmlFor}
      </label>
      <input
        type={type}
        {...restProps}
        className="input input-bordered w-full"
      />

      {/* error goes here */}
      <Message message={error} />
    </div>
  );
};

export default Input;
