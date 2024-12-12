/* eslint-disable react/prop-types */
function HeroSlideSubheading({ index, slides, currentSlide }) {
  return (
    <div
      className={`font-light text-xl ${index === currentSlide && "opacity-0"}`}
    >
      {slides[currentSlide].subHeading
        .split(" ")
        .map(
          (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
        )
        .join(" ")}
    </div>
  );
}
export default HeroSlideSubheading;
