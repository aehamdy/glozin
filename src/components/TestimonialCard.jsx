/* eslint-disable react/prop-types */
import TestimonialContent from "./TestimonialContent";
import TestimonialImage from "./TestimonialImage";

function TestimonialCard({ testimonial }) {
  return (
    <article className="flex">
      <TestimonialImage image={testimonial.image} />
      <TestimonialContent testimonialContent={testimonial} />
    </article>
  );
}
export default TestimonialCard;
