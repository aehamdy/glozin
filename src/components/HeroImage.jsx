import HeroSlideButton from "./HeroSlideButton";
import HeroSlideHeading from "./HeroSlideHeading";
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
            <HeroSlideHeading slides={slides} currentSlide={currentSlide} />
            <HeroSlideButton />
          </div>
        </>
      ))}
    </div>
  );
}
export default HeroImage;
