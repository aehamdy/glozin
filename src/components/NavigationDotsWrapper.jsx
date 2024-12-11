import NavigationDot from "./NavigationDot";

/* eslint-disable react/prop-types */
function NavigationDotsWrapper({ goToSlide, slidesLength, currentSlide }) {
  return (
    <div className="absolute flex gap-3 w-fit bottom-3 py-1 px-2 rounded-small backdrop-blur-sm">
      {Array.from({ length: slidesLength }).map((_, index) => (
        <NavigationDot
          key={index}
          index={index}
          goToSlide={goToSlide}
          currentSlide={currentSlide}
        />
      ))}
    </div>
  );
}
export default NavigationDotsWrapper;
