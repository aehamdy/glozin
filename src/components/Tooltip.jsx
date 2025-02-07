/* eslint-disable react/prop-types */
function Tooltip({ value }) {
  return (
    <span
      className="absolute -start-2 -translate-x-full ml-2 whitespace-nowrap px-2 py-1 text-sm font-medium 
text-primary-light bg-secondary-dark rounded-sm opacity-0 invisible transition-all 
group-hover/button:visible group-hover/button:opacity-100 group-hover/button:-start-4 duration-medium"
    >
      {value}
    </span>
  );
}
export default Tooltip;
