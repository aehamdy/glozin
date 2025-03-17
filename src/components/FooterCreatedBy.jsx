import { motion } from "motion/react";
import { fadeInAnimation } from "../animations/variants";

function FooterCreatedBy() {
  return (
    <motion.p
      variants={fadeInAnimation("left", 0.3)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
    >
      Created by{" "}
      <a
        href="https://ahmedessam-portfolio.vercel.app/"
        target="_blank"
        className="font-bold text-slate-600 hover:text-amber-600 duration-medium"
      >
        AE.DEV
      </a>
    </motion.p>
  );
}
export default FooterCreatedBy;
