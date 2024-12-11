/* eslint-disable react/prop-types */
function HeroSlideSubheading({ slides, currentSlide }) {
  return (
    <div className="font-light text-xl">
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
