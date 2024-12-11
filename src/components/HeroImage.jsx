import HeroSlideSubheading from "./HeroSlideSubheading";

/* eslint-disable react/prop-types */
function HeroImage({ slides, currentSlide }) {
  return (
    <div className="relative w-full h-full">
      {slides.map((slide, index) => (
        <>
          <img
            key={slide.id}
            src={slide.image}
            alt={`Slide-${slides[currentSlide].id}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out
            ${index === currentSlide ? "opacity-100" : "opacity-0"}`}
            aria-hidden={index !== currentSlide}
          />
          <div className="absolute bottom-12 start-4 flex flex-col items-start gap-3 text-primary-light">
            <HeroSlideSubheading slides={slides} currentSlide={currentSlide} />
            <h2 className="font-semibold text-6xl">
              {slides[currentSlide].heading
                .split(" ")
                .map(
                  (word) =>
                    word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
                )
                .join(" ")}
            </h2>
            <button
              type="button"
              className="py-3 px-6 font-semibold bg-primary-light text-secondary-dark rounded-medium"
            >
              Shop Collection
            </button>
          </div>
        </>
      ))}
    </div>
  );
}
export default HeroImage;
