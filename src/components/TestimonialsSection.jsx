import testimonial1 from "../assets/testimonial-1.jpg";
import testimonial1boughtItem from "../assets/testimonial-1-bought-item.jpg";
import testimonial2 from "../assets/testimonial-2.mp4";
import testimonial2boughtItem from "../assets/testimonial-2-bought-item.jpg";
import testimonial3 from "../assets/testimonial-3.webp";
import testimonial3boughtItem from "../assets/testimonial-3-bought-item.webp";
import TestimonialCard from "./TestimonialCard";
import NavigationDotsWrapper from "./NavigationDotsWrapper";
import { useState } from "react";

const testimonials = [
  {
    rate: 5,
    image: testimonial1,
    video: "",
    customerName: "Carie-Gosée H.",
    feedback:
      "These are sooo pretty and very comfy. Perfect color as well. I love wearing these with a neutral top and Chelsea boots. Wicked cute...😍",
    boughtItem: {
      image: testimonial1boughtItem,
      hoverImage: "",
      name: "Basic Bright Green Rib Extreme Crop",
      price: "68.00",
    },
  },
  {
    rate: 5,
    image: "",
    video: testimonial2,
    customerName: "Cameron Smith.",
    feedback:
      "A perfect product, it keeps you very warm without over heating. True to size, I couldn't be happier with the purchase... Thank you! 🤗",
    boughtItem: {
      image: testimonial2boughtItem,
      hoverImage: "",
      name: "Balloon Sleeve Blouse - Square Neck",
      price: "300.00",
    },
  },
  {
    rate: 5,
    image: testimonial3,
    video: "",
    customerName: "Algistino Lionel.",
    feedback:
      "A fantastic purchase! The product provides just the right amount of warmth without causing overheating. Highly recommend! 😊",
    boughtItem: {
      image: testimonial3boughtItem,
      hoverImage: "",
      name: "Slim Fit Basic Unpatterned T-shirt",
      price: "75.00",
    },
  },
];

function TestimonialsSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const goToSlide = (index) => {
    setCurrentTestimonial(index);
  };

  return (
    <section className="relative flex flex-col gap-3 w-full mb-7 pb-8 overflow-x-auto snap-x snap-mandatory">
      <div className="flex gap-3 w-[98%]">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard
            key={index}
            testimonial={testimonial}
            currentTestimonial={currentTestimonial}
          />
        ))}
      </div>
      <div className="absolute bottom-0 start-1/2 -translate-x-1/2">
        {/* <NavigationDotsWrapper
          variant="testimonialsSection"
          slidesLength={testimonials.length}
          currentSlide={currentTestimonial}
          goToSlide={goToSlide}
        /> */}
      </div>
    </section>
  );
}
export default TestimonialsSection;
