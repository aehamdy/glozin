function NavigationDotsWrapper({ count }) {
  return (
    <div className="absolute flex gap-3 w-fit bottom-3 py-1 px-2 rounded-small backdrop-blur-sm">
      <span className="relative w-5 h-5 border border-white rounded-full backdrop-blur-sm before:absolute before:w-[5px] before:h-[5px] before:top-1/2 before:start-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:bg-navigation-dots before:rounded-full"></span>
    </div>
  );
}
export default NavigationDotsWrapper;
