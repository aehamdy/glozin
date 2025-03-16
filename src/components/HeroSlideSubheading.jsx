/* eslint-disable react/prop-types */
import { motion } from "motion/react";
import { fadeInAnimation } from "../animations/variants";

function HeroSlideSubheading({ slides, currentSlide }) {
  return (
    <motion.div
      className="font-light text-lg md:text-2xl lg:text-xl"
      variants={fadeInAnimation("down", 1)}
      initial="hidden"
      animate="visible"
    >
      {slides[currentSlide].subHeading
        .split(" ")
        .map(
          (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
        )
        .join(" ")}
    </motion.div>
  );
}
export default HeroSlideSubheading;
