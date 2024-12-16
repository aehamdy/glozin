/* eslint-disable react/prop-types */
function NavigationDot({ index, variant, goToSlide, currentSlide }) {
  const heroSectionStyle =
    index === currentSlide
      ? "border border-white before:bg-white backdrop-blur-sm"
      : "before:bg-navigation-dots backdrop-blur-sm";

  const testimonialsSectionStyle =
    index === currentSlide
      ? "before:bg-content-medium-dark"
      : "before:bg-gray-400";

  const style =
    variant === "heroSection"
      ? heroSectionStyle
      : variant === "testimonialsSection"
      ? testimonialsSectionStyle
      : "";

  return (
    <span
      className={`relative w-5 h-5 ${style} rounded-full before:absolute before:w-[5px] before:h-[5px] before:top-1/2 before:start-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:rounded-full cursor-pointer`}
      onClick={() => goToSlide(index)}
    ></span>
    // <span
    //   className={`relative w-5 h-5 ${
    //     index === currentSlide && "border border-white"
    //   } rounded-full before:absolute before:w-[5px] before:h-[5px] before:top-1/2 before:start-1/2 before:-translate-x-1/2 before:-translate-y-1/2 ${
    //     index === currentSlide ? "before:bg-white" : "before:bg-navigation-dots"
    //   } before:rounded-full cursor-pointer`}
    //   onClick={() => goToSlide(index)}
    // ></span>
  );
}
export default NavigationDot;
