/* eslint-disable react/prop-types */
function Tooltip({ value }) {
  return (
    <span
      className="absolute -start-2 group-hover/button:-start-4 -translate-x-full ms-2 px-2 py-1 text-sm font-medium 
text-primary-light bg-secondary-dark whitespace-nowrap rounded-sm opacity-0 group-hover/button:opacity-100 
invisible group-hover/button:visible transition-all duration-medium"
    >
      {value}
    </span>
  );
}
export default Tooltip;
