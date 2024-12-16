/* eslint-disable react/prop-types */
import NavigationDot from "./NavigationDot";

function NavigationDotsWrapper({
  variant,
  goToSlide,
  slidesLength,
  currentSlide,
}) {
  return (
    <div
      className={`${
        variant === "testimonialsSection" && "block md:hidden"
      } absolute flex ${
        variant === "heroSection" ? "gap-3" : "gap-1"
      } w-fit bottom-3 start-1/2 -translate-x-1/2 py-1 px-2 ${
        variant === "heroSection" && "rounded-small backdrop-blur-sm"
      }`}
    >
      {Array.from({ length: slidesLength }).map((_, index) => (
        <NavigationDot
          key={index}
          variant={variant}
          index={index}
          goToSlide={goToSlide}
          currentSlide={currentSlide}
        />
      ))}
    </div>
  );
}
export default NavigationDotsWrapper;
