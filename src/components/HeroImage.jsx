function HeroImage({ slides, currentSlide }) {
  return slides.map((slide, index) => (
    <img
      key={slide.id}
      src={slide.image}
      alt={`Slide-${slides[currentSlide].id}`}
      className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out
            ${index === currentSlide ? "opacity-100" : "opacity-0"}`}
      aria-hidden={index !== currentSlide}
    />
  ));
}
export default HeroImage;
