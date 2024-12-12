/* eslint-disable react/prop-types */
function HeroSlideHeading({ slides, currentSlide }) {
  return (
    <h2 className="font-semibold text-3xl md:text-4xl lg:text-6xl">
      {slides[currentSlide].heading
        .split(/(?<=[ -])|(?=[ -])/)
        .map((word) =>
          word === "-" || word === " "
            ? word
            : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
        )
        .join("")}
    </h2>
  );
}

export default HeroSlideHeading;
