import { useState, useEffect } from "react";
import { motion } from "motion/react";
import image1 from "../assets/hero-image-1.jpg";
import image2 from "../assets/hero-image-2.jpg";
import image3 from "../assets/hero-image-3.jpg";
import NavigationDotsWrapper from "./NavigationDotsWrapper";
import HeroSlide from "./HeroSlide";

const slides = [
  {
    id: 1,
    image: image1,
    subHeading: "Sweater Collection",
    heading: "Online Exclusive",
  },
  {
    id: 2,
    image: image2,
    subHeading: "Look Exclusive",
    heading: "High-Top Design",
  },
  {
    id: 3,
    image: image3,
    subHeading: "Season Collection",
    heading: "Super Comfort",
  },
];

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
          prevVal === 0 ? slides.length - 1 : prevVal - 1
        );
        setIsDragging(false);
        setStartX(null);
      } else if (deltaX < -50) {
        setCurrentSlide((prevVal) =>
          prevVal === slides.length - 1 ? 0 : prevVal + 1
        );
        setIsDragging(false);
        setStartX(null);
      }
    }
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlide((prevValue) => (prevValue + 1) % slides.length);
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
      <HeroSlide slides={slides} currentSlide={currentSlide} />
      <NavigationDotsWrapper
        variant="heroSection"
        goToSlide={goToSlide}
        slidesLength={slides.length}
        currentSlide={currentSlide}
      />
    </motion.section>
  );
}

export default HeroSection;
