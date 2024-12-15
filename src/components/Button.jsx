/* eslint-disable react/prop-types */
function Button({ value, className }) {
  return (
    <button type="button" className={className}>
      {value}
    </button>
  );
}
export default Button;
