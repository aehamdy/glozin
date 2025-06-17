import { useState, useEffect } from "react";
import { motion } from "motion/react";
import NavigationDotsWrapper from "./NavigationDotsWrapper";
import HeroSlide from "./HeroSlide";
import { heroSlides } from "../data/heroSlides";

const containerVariants = {
  hidden: {
    x: "100vw",
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: { type: "spring", duration: 1.5, delay: 0.8 },
  },
};

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

  const handleMouseUp = (e) => {
    if (isDragging && startX !== null) {
      const deltaX = e.clientX - startX;

      if (deltaX > 50) {
        setCurrentSlide((prevVal) =>
          prevVal === 0 ? heroSlides.length - 1 : prevVal - 1
        );
        setIsDragging(false);
        setStartX(null);
      } else if (deltaX < -50) {
        setCurrentSlide((prevVal) =>
          prevVal === heroSlides.length - 1 ? 0 : prevVal + 1
        );
        setIsDragging(false);
        setStartX(null);
      }
    }
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlide((prevValue) => (prevValue + 1) % heroSlides.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <motion.section
      className="relative flex justify-center items-center w-full h-heroHeightSmall md:h-[75dvh] lg:h-[75dvh] mb-8 px-horizontal-spacing"
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <HeroSlide slides={heroSlides} currentSlide={currentSlide} />

      <NavigationDotsWrapper
        variant="heroSection"
        goToSlide={goToSlide}
        slidesLength={heroSlides.length}
        currentSlide={currentSlide}
      />
    </motion.section>
  );
}

export default HeroSection;
