/* eslint-disable react/prop-types */
import TestimonialCustomerName from "./TestimonialCustomerName";
import TestimonialFeedback from "./TestimonialFeedback";
import TestimonialRate from "./TestimonialRate";
import TestimonialVerification from "./TestimonialVerification";

function TestimonialContent({ testimonialContent }) {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <TestimonialRate rate={testimonialContent.rate} />
        <div className="flex items-center gap-3">
          <TestimonialCustomerName name={testimonialContent.customerName} />
          <TestimonialVerification />
        </div>
      </div>
      <TestimonialFeedback feedback={testimonialContent.feedback} />
    </div>
  );
}
export default TestimonialContent;
