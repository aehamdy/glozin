/* eslint-disable react/prop-types */
import { motion } from "motion/react";
import BannerContent from "./BannerContent";
import BannerImage from "./BannerImage";
import { fadeInAnimation } from "../animations/variants";
import { Link } from "react-router-dom";

function SpotlightOfferBanner({ banner, index }) {
  return (
    <motion.article
      variants={fadeInAnimation("up", index * 0.2)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
    >
      <Link
        to={banner.link}
        className="group relative flex flex-col text-primary-light rounded-small overflow-hidden cursor-pointer"
      >
        <BannerImage image={banner.image} />
        <BannerContent
          content={banner}
          mainTextStyle="text-3xl md:text-3xl lg:text-2xl"
        />
      </Link>
    </motion.article>
  );
}
export default SpotlightOfferBanner;
