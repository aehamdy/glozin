/* eslint-disable react/prop-types */

function TextInput({
  type = "text",
  name,
  id,
  placeholder,
  className,
  required,
}) {
  const defaultStyles =
    "py-2 px-3 bg-white border focus:border-blue-400 outline-none rounded-lg transition-all duration-short";

  return (
    <input
      type={type}
      name={name}
      id={id}
      placeholder={placeholder}
      className={`${defaultStyles} ${className}`}
      required={required && required}
    />
  );
}
export default TextInput;
