/* eslint-disable react/prop-types */
import Icon from "./Icon";

function TestimonialRate({ rate }) {
  return (
    <div className="flex">
      {Array(rate)
        .fill()
        .map((_, index) => (
          <Icon
            key={index}
            name="star"
            className="text-rate-color cursor-default"
          />
        ))}
    </div>
  );
}
export default TestimonialRate;
