/* eslint-disable react/prop-types */
import { motion } from "motion/react";
import { fadeInAnimation } from "../animations/variants";

function SectionHeading({ heading }) {
  return (
    <motion.h2
      className="font-semibold text-3xl md:text-4xl text-secondary-dark tracking-tight"
      variants={fadeInAnimation("left")}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
    >
      {heading}
    </motion.h2>
  );
}
export default SectionHeading;
