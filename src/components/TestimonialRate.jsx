/* eslint-disable react/prop-types */
import Icon from "./Icon";

function TestimonialRate({ rate }) {
  return (
    <div>
      {Array.from(rate).map((_, index) => (
        <Icon key={index} name="star" />
      ))}
    </div>
  );
}
export default TestimonialRate;
