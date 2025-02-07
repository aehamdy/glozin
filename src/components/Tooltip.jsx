/* eslint-disable react/prop-types */
function Tooltip({ value }) {
  if (!value) return null;

  return (
    <span
      className="absolute -start-2 group-hover/button:-start-4 -translate-x-full ms-2 px-2 py-1 text-xs font-medium 
text-primary-light bg-secondary-dark whitespace-nowrap rounded-md opacity-0 group-hover/button:opacity-100 
invisible group-hover/button:visible transition-all duration-medium"
    >
      {value.toUpperCase()}
    </span>
  );
}
export default Tooltip;
