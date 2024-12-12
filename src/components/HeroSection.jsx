import { useState, useEffect } from "react";
import banner1 from "../assets/hero-banner-1.jpg";
import banner2 from "../assets/hero-banner-2.jpg";
import banner3 from "../assets/hero-banner-3.jpg";
import NavigationDotsWrapper from "./NavigationDotsWrapper";
import HeroSlide from "./HeroSlide";

const slides = [
  {
    id: 1,
    image: banner1,
    subHeading: "Sweater Collection",
    heading: "Online Exclusive",
  },
  {
    id: 2,
    image: banner2,
    subHeading: "Look Exclusive",
    heading: "High-Top Design",
  },
  {
    id: 3,
    image: banner3,
    subHeading: "Season Collection",
    heading: "Super Comfort",
  },
];

function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(null);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const handleMouseDown = (e) => {
    if (e.button === 0) {
      setIsDragging(true);
      setStartX(e.clientX);
    }
  };

  const handleMouseMove = (e) => {
    if (isDragging && startX !== null) {
      const deltaX = e.clientX - startX;

      if (deltaX > 50) {
        setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
        setIsDragging(false);
        setStartX(null);
      } else if (deltaX < -50) {
        setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
        setIsDragging(false);
        setStartX(null);
      }
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    const preventContextMenu = (e) => e.preventDefault();
    document.addEventListener("contextmenu", preventContextMenu);

    return () => {
      document.removeEventListener("contextmenu", preventContextMenu);
    };
  }, []);

  return (
    <section
      className="relative flex justify-center items-center w-full h-[70dvh] mt-10 rounded-small overflow-hidden bg-black"
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
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
