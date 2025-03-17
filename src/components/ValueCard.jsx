/* eslint-disable react/prop-types */
import { motion } from "motion/react";
import { fadeInAnimation } from "../animations/variants";

function ValueCard({ index, image, heading, desc }) {
  return (
    <motion.article
      className="flex flex-col items-center gap-4"
      variants={fadeInAnimation("up", index * 0.3)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="group rounded-small overflow-hidden">
        <img
          src={image}
          alt="value image"
          className="object-cover group-hover:scale-110 duration-medium"
        />
      </div>
      <div className="space-y-1">
        <h2 className="font-semibold text-lg text-secondary-dark">{heading}</h2>
        <p className="w-11/12 mx-auto text-sm text-content-medium-dark">
          {desc}
        </p>
      </div>
    </motion.article>
  );
}
export default ValueCard;
