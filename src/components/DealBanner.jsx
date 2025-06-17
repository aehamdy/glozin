/* eslint-disable react/prop-types */
import { motion } from "motion/react";
import BannerContent from "./BannerContent";
import BannerImage from "./BannerImage";
import { fadeInAnimation } from "../animations/variants";
import { Link } from "react-router-dom";

function DealBanner({ deal, index }) {
  return (
    <motion.div
      variants={fadeInAnimation(index % 2 === 0 ? "right" : "left")}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
    >
      <Link
        to={deal.link}
        className="relative flex flex-col rounded-xl overflow-hidden cursor-pointer"
      >
        <BannerContent
          content={deal}
          mainTextStyle="text-3xl md:text-3xl lg:text-2xl"
        />
        <BannerImage image={deal.image} />
      </Link>
    </motion.div>
  );
}

export default DealBanner;
