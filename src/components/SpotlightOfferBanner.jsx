/* eslint-disable react/prop-types */
import { motion } from "motion/react";
import BannerContent from "./BannerContent";
import BannerImage from "./BannerImage";
import { fadeInAnimation } from "../animations/variants";

function SpotlightOfferBanner({ banner, index }) {
  return (
    <motion.article
      className="group relative flex flex-col text-primary-light rounded-small overflow-hidden cursor-pointer"
      variants={fadeInAnimation("up", index * 0.2)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.15 }}
    >
      <BannerImage image={banner.image} />
      <BannerContent
        content={banner}
        mainTextStyle="text-3xl md:text-3xl lg:text-2xl"
      />
    </motion.article>
  );
}
export default SpotlightOfferBanner;
