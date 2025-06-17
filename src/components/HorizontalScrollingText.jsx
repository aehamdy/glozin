/* eslint-disable react/prop-types */
import { motion } from "motion/react";

const containerVariants = {
  hidden: {
    x: "100vw",
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      mass: 0.5,
      damping: 6,
      // duration: 2,
      delay: 0.5,
    },
  },
};

function HorizontalScrollingText({ scrollingText, mode, fullWidth }) {
  return (
    <motion.div
      className={`${!fullWidth && "mx-horizontal-spacing "} py-5 ${
        mode === "light" ? "bg-primary-light" : "bg-primary-dark"
      } overflow-clip`}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div
        className={`scrolling-text h-[22px] flex items-center gap-3 ps-4 uppercase font-semibold text-[13px] ${
          mode === "light" ? "text-content-medium-dark" : "text-primary-light"
        } overflow-clip w-max animate-horizontal-move`}
      >
        {Array(3)
          .fill(scrollingText)
          .flat()
          .map((text, index, allTexts) => (
            <div key={index} className="flex justify-center items-center">
              <p
                key={index}
                className="py-1 px-3"
                aria-hidden={index !== allTexts.indexOf(text)}
              >
                {text}
              </p>
              <svg
                className="ms-2"
                width="12"
                height="12"
                fill="none"
                aria-hidden={index !== allTexts.indexOf(text)}
              >
                <path
                  fill="currentColor"
                  d="M0 6c3 0 6-3 6-6 0 3 3 6 6 6-3 0-6 3-6 6 0-3-3-6-6-6Z"
                ></path>
              </svg>
            </div>
          ))}
      </div>
    </motion.div>
  );
}
export default HorizontalScrollingText;
