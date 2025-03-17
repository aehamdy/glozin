/* eslint-disable react/prop-types */
import { motion } from "motion/react";
import Button from "./Button";
import { fadeInAnimation } from "../animations/variants";

function OverviewCard({ item, index }) {
  return (
    <article
      className={`flex flex-col md:flex-row ${
        (index + 1) % 2 === 0 && "md:flex-row-reverse"
      } items-center gap-8`}
    >
      <motion.div
        className="md:w-1/2 rounded-small overflow-hidden"
        variants={fadeInAnimation(index % 2 === 0 ? "down" : "up")}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
      >
        <img src={item.image} alt="overview image" className="object-fit" />
      </motion.div>

      <motion.div
        className="flex flex-col gap-3 lg:gap-4 md:w-1/2 text-secondary-dark"
        variants={fadeInAnimation(index % 2 === 0 ? "left" : "right")}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
      >
        <div className="space-y-2">
          <div className="font-semibold text-sm">{item.heading}</div>
          <h2 className="font-semibold text-3xl">{item.subheading}</h2>
        </div>

        <p className="md:w-11/12 mx-auto text-sm text-content-medium-dark">
          {item.description}
        </p>
        <Button
          value={item.buttonText}
          className="w-fit mx-auto py-3 px-6 font-medium text-md hover:text-lg text-primary-light bg-secondary-dark hover:bg-primary-dark rounded-medium duration-short"
        />
      </motion.div>
    </article>
  );
}
export default OverviewCard;
