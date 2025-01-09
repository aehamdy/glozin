/* eslint-disable react/prop-types */
function Button({ value, className, status }) {
  return (
    <button type="button" className={className} disabled={status}>
      {value}
    </button>
  );
}
export default Button;
