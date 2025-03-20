import { motion } from "motion/react";
import storeData from "../data/storeData";
import { fadeInAnimation } from "../animations/variants";

function FooterCopyright() {
  const d = new Date();
  const year = d.getFullYear();
  return (
    <motion.p
      variants={fadeInAnimation("right", 0.3)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      &copy; {year}{" "}
      {storeData.name.charAt(0).toUpperCase() +
        storeData.name.slice(1).toLowerCase()}{" "}
      store. All rights reserved.
    </motion.p>
  );
}
export default FooterCopyright;
