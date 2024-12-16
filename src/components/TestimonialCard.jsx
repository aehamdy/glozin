/* eslint-disable react/prop-types */
import TestimonialContent from "./TestimonialContent";
import TestimonialMediaDisplay from "./TestimonialMediaDisplay";

function TestimonialCard({ testimonial }) {
  return (
    <article className="flex gap-4 relative h-[345px] border border-content-medium rounded-small overflow-hidden">
      <TestimonialMediaDisplay
        image={testimonial.image}
        video={testimonial.video}
      />
      <TestimonialContent testimonialContent={testimonial} />
    </article>
  );
}
export default TestimonialCard;
