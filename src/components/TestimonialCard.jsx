/* eslint-disable react/prop-types */
import TestimonialContent from "./TestimonialContent";
import TestimonialMediaDisplay from "./TestimonialMediaDisplay";

function TestimonialCard({ variant, testimonial, showCustomerImage }) {
  return (
    <article
      className={`relative flex flex-col md:flex-row flex-shrink-0 w-10/12 md:w-[65%] lg:w-[48%] h-auto bg-primary-light ${
        variant === "primary" && "border border-primary-border"
      } rounded-small snap-start overflow-hidden select-none`}
    >
      {showCustomerImage && (
        <TestimonialMediaDisplay
          image={testimonial.image}
          video={testimonial.video}
        />
      )}
      <TestimonialContent testimonialContent={testimonial} />
    </article>
  );
}
export default TestimonialCard;
