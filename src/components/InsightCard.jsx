/* eslint-disable react/prop-types */
import { motion } from "motion/react";
import { fadeInAnimation } from "../animations/variants";

function InsightCard({ index, item }) {
  return (
    <motion.article
      className="flex flex-col gap-3"
      variants={fadeInAnimation("up", index * 0.3)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="group rounded-small overflow-hidden">
        <img
          src={item.image}
          alt="insight image"
          className="w-full object-cover group-hover:scale-110 duration-medium"
        />
      </div>
      <div className="flex flex-col items-center">
        <h2 className="font-semibold text-lg text-secondary-dark">
          {item.heading}
        </h2>
        <p className="w-[94%] text-sm text-content-medium-dark">
          {item.description}
        </p>
      </div>
    </motion.article>
  );
}
export default InsightCard;
