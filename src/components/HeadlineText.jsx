/* eslint-disable react/prop-types */
import { motion } from "motion/react";
import { fadeInAnimation } from "../animations/variants";

function HeadlineText({ text }) {
  return (
    <motion.div
      className="mb-3 font-semibold text-sm text-secondary-dark"
      variants={fadeInAnimation("down", 0.3)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
    >
      {text}
    </motion.div>
  );
}
export default HeadlineText;
