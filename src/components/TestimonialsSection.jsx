import testimonialsData from "../data/testimonialsData";
import TestimonialCard from "./TestimonialCard";
import SectionHeader from "./SectionHeader";

function TestimonialsSection({ showCustomerImage }) {
  return (
    <section className="relative flex flex-col gap-3 w-full my-vertical-spacing pb-8 overflow-hidden">
      <SectionHeader
        title="Customer Say!"
        subtitle="Customers love our products and we always strive to please them all."
      />
      <div className="flex gap-3 w-[98%] mx-horizontal-spacing pe-1 overflow-x-auto snap-x snap-mandatory">
        {testimonialsData.map((testimonial, index) => (
          <TestimonialCard
            key={index}
            testimonial={testimonial}
            showCustomerImage={showCustomerImage}
          />
        ))}
      </div>
    </section>
  );
}
export default TestimonialsSection;
