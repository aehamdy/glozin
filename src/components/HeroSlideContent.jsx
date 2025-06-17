/* eslint-disable react/prop-types */
import { motion } from "motion/react";
import { fadeInAnimation } from "../animations/variants";
import HeroSlideHeading from "./HeroSlideHeading";
import HeroSlideSubheading from "./HeroSlideSubheading";
import { Link } from "react-router-dom";

function HeroSlideContent({ index, slides, currentSlide }) {
  return (
    <motion.div
      className="absolute bottom-12 start-4 flex flex-col items-start gap-1 text-primary-light"
      variants={fadeInAnimation("up", 0.4)}
      initial="hidden"
      animate="visible"
    >
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

      <Link
        to={slides[currentSlide].link}
        className="w-fit mt-4 lg:mt-6 py-3 md:py-3 lg:py-4 px-6 md:px-6 lg:px-9 font-semibold text-[15px] text-primary-dark hover:text-primary-light bg-primary-light hover:bg-secondary-dark rounded-medium duration-medium"
      >
        Shop Collection
      </Link>
    </motion.div>
  );
}
export default HeroSlideContent;
