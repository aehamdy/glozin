/* eslint-disable react/prop-types */
import TestimonialCustomerName from "./TestimonialCustomerName";
import TestimonialFeedback from "./TestimonialFeedback";
import TestimonialRate from "./TestimonialRate";
import TestimonialVerification from "./TestimonialVerification";

function TestimonialContent({ testimonialContent }) {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col gap-6">
        <TestimonialRate rate={testimonialContent.rate} />
        <div className="flex justify-between items-center gap-3">
          <TestimonialCustomerName name={testimonialContent.customerName} />
          <TestimonialVerification />
        </div>
      </div>
      <TestimonialFeedback feedback={testimonialContent.feedback} />
    </div>
  );
}
export default TestimonialContent;
