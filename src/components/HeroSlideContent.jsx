/* eslint-disable react/prop-types */
import HeroSlideButton from "./HeroSlideButton";
import HeroSlideHeading from "./HeroSlideHeading";
import HeroSlideSubheading from "./HeroSlideSubheading";

function HeroSlideContent({ index, slides, currentSlide }) {
  return (
    <div className="absolute bottom-12 start-4 flex flex-col items-start gap-3 text-primary-light">
      <HeroSlideSubheading
        index={index}
        slides={slides}
        currentSlide={currentSlide}
      />
      <HeroSlideHeading
        index={index}
        slides={slides}
        currentSlide={currentSlide}
      />
      <HeroSlideButton />
    </div>
  );
}
export default HeroSlideContent;
