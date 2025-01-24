/* eslint-disable react/prop-types */
function Button({ value, className, status, handleClick, children }) {
  return (
    <button
      onClick={() => handleClick()}
      type="button"
      disabled={status}
      className={className}
    >
      {value}
      {children}
    </button>
  );
}
export default Button;
