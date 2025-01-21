/* eslint-disable react/prop-types */
function Button({ value, className, status, handleClick }) {
  return (
    <button
      onClick={() => handleClick()}
      type="button"
      disabled={status}
      className={className}
    >
      {value}
    </button>
  );
}
export default Button;
