/* eslint-disable react/prop-types */
import { motion } from "motion/react";
import { useRef, useState } from "react";
import testimonialsData from "../data/testimonialsData";
import TestimonialCard from "./TestimonialCard";
import SectionHeader from "./SectionHeader";
import { fadeInAnimation } from "../animations/variants";

function TestimonialsSection({
  variant,
  showCustomerImage,
  testimonialsCount,
}) {
  const containerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - containerRef.current.offsetLeft);
    setScrollLeft(containerRef.current.scrollLeft);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 5.5; // Adjust sensitivity
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUpOrLeave = () => {
    setIsDragging(false);
  };

  return (
    <section
      className={`relative flex flex-col gap-3 w-full my-vertical-spacing ${
        variant === "primary" ? "pb-8 bg-primary-light" : "py-10 bg-[#F5F5F5]"
      } overflow-hidden`}
    >
      <SectionHeader
        heading="Customer Say!"
        desc="Customers love our products and we always strive to please them all."
      />
      <motion.div
        ref={containerRef}
        className="flex gap-3 w-[98%] mx-horizontal-spacing pe-1 overflow-x-auto snap-x snap-mandatory scroll-smooth cursor-grab hide-scrollbar"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUpOrLeave}
        onMouseLeave={handleMouseUpOrLeave}
        variants={fadeInAnimation("up")}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.25 }}
      >
        {testimonialsData
          .slice(0, testimonialsCount)
          .map((testimonial, index) => (
            <TestimonialCard
              key={index}
              index={index}
              variant={variant}
              testimonial={testimonial}
              showCustomerImage={showCustomerImage}
            />
          ))}
      </motion.div>
    </section>
  );
}

export default TestimonialsSection;
