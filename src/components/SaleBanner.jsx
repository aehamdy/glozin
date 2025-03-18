/* eslint-disable react/prop-types */
import { motion } from "motion/react";
import { fadeInAnimation } from "../animations/variants";

function SaleBanner({ index, code }) {
  return (
    <motion.article
      className="flex flex-col gap-[5px] md:gap-[2px]"
      variants={fadeInAnimation("up", index * 0.2)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
    >
      <div className="flex flex-col items-center gap-2 h-[170px] md:h-[200px] pt-8 pb-5 md:pt-16 md:pb-8 px-6 text-primary-light bg-[#fff3] border border-[#fff3] rounded-small backdrop-filter">
        <span className="w-fit py-2 px-5 font-semibold uppercase text-xs text-secondary-dark bg-primary-light rounded-medium">
          {code.label}
        </span>
        <h4 className="font-bold text-xl md:text-2xl">{code.title}</h4>
        <p className="text-sm md:text-[15px]">{code.desc}</p>
      </div>
      <div className="p-3 md:p-5 text-secondary-dark uppercase bg-primary-light rounded-small">
        <p className="text-sm uppercase">use code:</p>
        <h5 className="font-extrabold uppercase">{code.code}</h5>
      </div>
    </motion.article>
  );
}
export default SaleBanner;
