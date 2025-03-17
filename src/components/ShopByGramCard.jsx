/* eslint-disable react/prop-types */
import { motion } from "motion/react";
import { fadeInAnimation } from "../animations/variants";

function ShopByGramCard({ index, media }) {
  return (
    <motion.article
      className="relative w-1/2 md:w-2/6 lg:w-[200px] h-[200px] rounded-xl overflow-hidden snap-start flex-shrink-0"
      variants={fadeInAnimation("up", index * 0.25)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.15 }}
    >
      {media.image ? (
        <img
          src={media.image}
          alt="image"
          className="absolte w-full top-0 start-0 object-cover"
        />
      ) : (
        <video
          className="absolute top-0 start-0 w-full max-w-full h-full object-cover"
          loop
          muted
          autoPlay
        >
          <source src={media.video} type="video/mp4" />
        </video>
      )}
    </motion.article>
  );
}
export default ShopByGramCard;
