import { useState } from "react";
import banner1 from "../assets/hero-banner-1.jpg";
import banner2 from "../assets/hero-banner-2.jpg";
import banner3 from "../assets/hero-banner-3.jpg";
import NavigationDotsWrapper from "./NavigationDotsWrapper";

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
    <section className="relative flex justify-center items-center w-full h-[100dvh - 65px] mt-10 bg-sky-800 rounded-small overflow-hidden">
      <div className="w-full h-full">
        <img src={slides[currentSlide].image} alt="" className="w-full" />
      </div>
      <NavigationDotsWrapper
        goToSlide={goToSlide}
        slidesLength={slides.length}
        currentSlide={currentSlide}
      />
    </section>
  );
}
export default HeroSection;
