/* eslint-disable react/prop-types */
import TestimonialBoughtItem from "./TestimonialBoughtItem";
import TestimonialCustomerName from "./TestimonialCustomerName";
import TestimonialFeedback from "./TestimonialFeedback";
import TestimonialRate from "./TestimonialRate";
import TestimonialVerification from "./TestimonialVerification";

function TestimonialContent({ testimonialContent }) {
  return (
    <div className="flex flex-col py-4 md:py-6 px-5 md:px-7">
      <div className="flex flex-col gap-1 md:gap-2">
        <TestimonialRate rate={testimonialContent.rate} />
        <div className="flex items-center gap-3">
          <TestimonialCustomerName name={testimonialContent.customerName} />
          <TestimonialVerification />
        </div>
      </div>
      <TestimonialFeedback feedback={testimonialContent.feedback} />
      <TestimonialBoughtItem item={testimonialContent.boughtItem} />
    </div>
  );
}
export default TestimonialContent;
