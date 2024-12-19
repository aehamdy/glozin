import testimonial1 from "../assets/testimonial-1.jpg";
import testimonial1boughtItem from "../assets/testimonial-1-bought-item.jpg";
import testimonial2 from "../assets/testimonial-2.mp4";
import testimonial2boughtItem from "../assets/testimonial-2-bought-item.jpg";
import testimonial3 from "../assets/testimonial-3.webp";
import testimonial3boughtItem from "../assets/testimonial-3-bought-item.webp";
import TestimonialCard from "./TestimonialCard";
import SectionHeader from "./SectionHeader";

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
  return (
    <section className="relative flex flex-col gap-3 w-full mb-vertical-spacing pb-8 overflow-hidden">
      <SectionHeader
        title="Customer Say!"
        subtitle="Customers love our products and we always strive to please them all."
      />
      <div className="flex gap-3 w-[98%] mx-horizontal-spacing pe-1 overflow-x-auto snap-x snap-mandatory">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index} testimonial={testimonial} />
        ))}
      </div>
    </section>
  );
}
export default TestimonialsSection;
