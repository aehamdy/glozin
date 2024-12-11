import NavigationDot from "./NavigationDot";

/* eslint-disable react/prop-types */
function NavigationDotsWrapper({ count }) {
  return (
    <div className="absolute flex gap-3 w-fit bottom-3 py-1 px-2 rounded-small backdrop-blur-sm">
      {Array.from({ length: count }).map((_, index) => (
        <NavigationDot key={index} />
      ))}
    </div>
  );
}
export default NavigationDotsWrapper;
