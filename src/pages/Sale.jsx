// import { useEffect, useState } from "react";
import { motion } from "motion/react";
import saleVideo from "../assets/sale-video.mp4";
import BrandStoryPanel from "../components/BrandStoryPanel";
import FeaturesSection from "../components/FeaturesSection";
import HorizontalScrollingText from "../components/HorizontalScrollingText";
import SaleBannersWrapper from "../components/SaleBannersWrapper";
import SectionHeader from "../components/SectionHeader";
import TestimonialsSection from "../components/TestimonialsSection";
import discountCodes from "../data/discountCodes";

const headingVariant = {
  hidden: { scale: 0, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { type: "spring", delay: 0.5 } },
};

const paragraphVariant = {
  hidden: { scale: 0, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { type: "spring", delay: 0.8 } },
};

function Sale() {
  const selectedOffer = discountCodes.find(
    (offer) => offer.label === "flash sale"
  );

  const formattedLabel = selectedOffer.label
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return (
    <section className="relative">
      <div className="relative w-full py-8 before:absolute before:w-full before:h-full before:top-0 before:start-0 before:bg-[#a9171790] z-[-1]">
        <video
          autoPlay
          muted
          loop
          src={saleVideo}
          className="absolute w-full h-full top-0 start-0 object-cover z-[-2]"
        ></video>
        <div className="relative flex flex-col items-center gap-6 md:gap-10 z-10">
          <motion.div className="flex flex-col items-center gap-5 text-primary-light ">
            <motion.h2
              className="font-bold text-5xl md:text-6xl tracking-tight"
              variants={headingVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
            >
              {formattedLabel}
              <br />
              Up To {selectedOffer.discountAmount}% Off
            </motion.h2>
            <motion.p
              className="text-lg"
              variants={paragraphVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
            >
              White Friday sale up to {selectedOffer.discountAmount}% all items.
              Hurry up!
            </motion.p>
          </motion.div>
          <SaleBannersWrapper />
        </div>
      </div>
      <HorizontalScrollingText
        scrollingText={[
          "Black Friday & Holiday Sale: Up to 75% Off All Products",
          "Black Friday & Holiday Sale: Up to 75% Off All Products",
        ]}
        mode="dark"
        fullWidth="false"
      />

      <div className="my-8 px-vertical-spacing">
        <SectionHeader heading="Last Chance" />
        <SectionHeader heading="50-75% Off. Snooze-You Lose" />

        {/* <ProductsWrapper products={products} /> */}
      </div>

      <TestimonialsSection variant="secondary" showCustomerImage={false} />
      <BrandStoryPanel />
      <FeaturesSection />
    </section>
  );
}
export default Sale;
