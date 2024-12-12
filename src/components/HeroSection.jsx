import { useEffect, useState } from "react";
import banner1 from "../assets/hero-banner-1.jpg";
import banner2 from "../assets/hero-banner-2.jpg";
import banner3 from "../assets/hero-banner-3.jpg";
import NavigationDotsWrapper from "./NavigationDotsWrapper";
import HeroSlide from "./HeroSlide";

const slides = [
  {
    id: 1,
    image: banner1,
    subHeading: "sweater collection",
    heading: "online exclusive",
  },
  {
    id: 2,
    image: banner2,
    subHeading: "look exclusive",
    heading: "high-top design",
  },
  {
    id: 3,
    image: banner3,
    subHeading: "season collection",
    heading: "super comfort",
  },
];

function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlide((prevValue) =>
        prevValue === slides.length - 1 ? 0 : prevValue + 1
      );
    }, 5000);

    return () => clearInterval(intervalId);
  }, [currentSlide]);

  return (
    <section className="relative flex justify-center items-center w-full h-[70dvh] mt-10 rounded-small overflow-hidden bg-black">
      <HeroSlide slides={slides} currentSlide={currentSlide} />
      <NavigationDotsWrapper
        goToSlide={goToSlide}
        slidesLength={slides.length}
        currentSlide={currentSlide}
      />
    </section>
  );
}
export default HeroSection;
