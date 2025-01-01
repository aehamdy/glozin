/* eslint-disable react/prop-types */
import TestimonialContent from "./TestimonialContent";
import TestimonialMediaDisplay from "./TestimonialMediaDisplay";

function TestimonialCard({ testimonial, showCustomerImage }) {
  return (
    <article className="flex flex-col md:flex-row flex-shrink-0 relative w-10/12 md:w-[65%] lg:w-[48%] h-auto border border-content-medium rounded-small snap-start overflow-hidden select-none">
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
