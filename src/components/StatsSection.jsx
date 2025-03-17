import { motion } from "motion/react";
import HeadlineText from "./HeadlineText";
import SectionHeader from "./SectionHeader";
import StatsWrapper from "./StatsWrapper";
import aboutusBanner from "../assets/about-us-banner.webp";

const imageContainerVariants = {
  hidden: { scale: 0, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { type: "spring", duration: 1.6, delay: 0.8 },
  },
};

function StatsSection() {
  return (
    <div className="py-10 md:py-vertical-spacing px-1 md:px-horizontal-spacing">
      <HeadlineText text="Welcome to Glozin" />
      <SectionHeader heading="Best Store" />
      <SectionHeader
        heading="Available to Everyone!"
        desc="Over 15 years of experience, we have meticulously curated collections that transcend fleeting trends, embodying a timeless elegance that resonates with our discerning clientele."
      />
      <motion.div
        className="w-full mx-auto rounded-small overflow-hidden"
        variants={imageContainerVariants}
        initial="hidden"
        animate="visible"
      >
        <img
          src={aboutusBanner}
          alt="about-us image"
          className="w-full object-cover"
        />
      </motion.div>
      <StatsWrapper />
    </div>
  );
}
export default StatsSection;
