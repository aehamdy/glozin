/* eslint-disable react/prop-types */
import { motion } from "motion/react";
import { fadeInAnimation } from "../animations/variants";

function StatCard({ index, title, subtitle, desc }) {
  return (
    <motion.article
      className="flex flex-col items-center gap-2"
      variants={fadeInAnimation("up", index * 0.3)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <h3 className="font-semibold text-3xl text-secondary-dark">{title}</h3>
      <h4 className="font-semibold text-xl text-secondary-dark">{subtitle}</h4>
      <p className="w-[80%] text-content-medium-dark">{desc}</p>
    </motion.article>
  );
}
export default StatCard;
