/* eslint-disable react/prop-types */
function Button({ value, className, status, handleClick, children }) {
  const onClickHandler = () => {
    handleClick();
  };

  return (
    <button
      onClick={onClickHandler}
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
