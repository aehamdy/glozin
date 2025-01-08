/* eslint-disable react/prop-types */
import Icon from "./Icon";

function ProductRate({ productRate, productReviews, totalStars }) {
  return (
    <div className="flex justify-between items-center gap-5 my-1 w-fit">
      <div className="flex gap-1">
        {Array(totalStars)
          .fill()
          .flat()
          .map((_, index) => (
            <Icon
              key={index}
              name={`${
                index < Math.round(productRate) ? "filledStar" : "outlineStar"
              }`}
              size="16"
              className="text-rate-color"
            />
          ))}
      </div>
      <span className="text-sm md:text-[15px] text-content-medium-dark">
        {productReviews?.length || 0} reviews
      </span>
    </div>
  );
}
export default ProductRate;
