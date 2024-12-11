import { useState } from "react";
import banner1 from "../assets/hero-banner-1.jpg";
import banner2 from "../assets/hero-banner-2.jpg";
import banner3 from "../assets/hero-banner-3.jpg";
import NavigationDotsWrapper from "./NavigationDotsWrapper";
import HeroImage from "./HeroImage";

const slides = [
  { id: 1, image: banner1, subHeading: "", heading: "" },
  { id: 2, image: banner2, subHeading: "", heading: "" },
  { id: 3, image: banner3, subHeading: "", heading: "" },
];

function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section className="relative flex justify-center items-center w-full h-[70dvh] mt-10 rounded-small overflow-hidden bg-black">
      <HeroImage slides={slides} currentSlide={currentSlide} />
      <NavigationDotsWrapper
        goToSlide={goToSlide}
        slidesLength={slides.length}
        currentSlide={currentSlide}
      />
    </section>
  );
}
export default HeroSection;
