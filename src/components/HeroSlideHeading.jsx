/* eslint-disable react/prop-types */
function HeroSlideHeading({ slides, currentSlide }) {
  return (
    <h2 className="font-semibold text-6xl">
      {slides[currentSlide].heading
        .split(" ")
        .map(
          (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
        )
        .join(" ")}
    </h2>
  );
}
export default HeroSlideHeading;
