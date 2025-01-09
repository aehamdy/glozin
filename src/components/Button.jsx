/* eslint-disable react/prop-types */
function Button({ value, className, status }) {
  return (
    <button type="button" disabled={status} className={className}>
      {console.log(`Button status: ${status}`)}
      {value}
    </button>
  );
}
export default Button;
