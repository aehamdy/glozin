/* eslint-disable react/prop-types */
import HeroImage from "./HeroImage";
import HeroSlideContent from "./HeroSlideContent";

function HeroSlide({ slides, currentSlide }) {
  return (
    <div className="relative w-full h-full">
      <HeroImage slides={slides} currentSlide={currentSlide} />
      <HeroSlideContent slides={slides} currentSlide={currentSlide} />
    </div>
  );
}
export default HeroSlide;
