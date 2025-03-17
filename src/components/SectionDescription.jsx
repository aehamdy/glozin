/* eslint-disable react/prop-types */
import { motion } from "motion/react";
import { fadeInAnimation } from "../animations/variants";

function SectionDescription({ desc }) {
  return (
    <motion.p
      className="max-w-[90%] text-content-medium-dark"
      variants={fadeInAnimation("left", 0.3)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
    >
      {desc}
    </motion.p>
  );
}
export default SectionDescription;
