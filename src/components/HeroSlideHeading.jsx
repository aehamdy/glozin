/* eslint-disable react/prop-types */
import { motion } from "motion/react";
import { fadeInAnimation } from "../animations/variants";

function HeroSlideHeading({ slides, currentSlide }) {
  return (
    <motion.h2
      className="font-semibold text-3xl md:text-4xl lg:text-6xl"
      variants={fadeInAnimation("up", 0.8)}
      initial="hidden"
      animate="visible"
    >
      {slides[currentSlide].heading
        .split(/(?<=[ -])|(?=[ -])/)
        .map((word) =>
          word === "-" || word === " "
            ? word
            : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
        )
        .join("")}
    </motion.h2>
  );
}

export default HeroSlideHeading;
