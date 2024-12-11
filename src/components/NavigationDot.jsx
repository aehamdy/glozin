/* eslint-disable react/prop-types */
function NavigationDot({ index, goToSlide, currentSlide }) {
  return (
    <span
      className={`relative w-5 h-5 ${
        index === currentSlide && "border border-white"
      } rounded-full backdrop-blur-sm before:absolute before:w-[5px] before:h-[5px] before:top-1/2 before:start-1/2 before:-translate-x-1/2 before:-translate-y-1/2 ${
        index === currentSlide ? "before:bg-white" : "before:bg-navigation-dots"
      } before:rounded-full cursor-pointer`}
      onClick={() => goToSlide(index)}
    >
      {console.log(`index: ${index} - slide: ${currentSlide}`)}
    </span>
  );
}
export default NavigationDot;
