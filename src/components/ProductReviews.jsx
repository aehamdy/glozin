/* eslint-disable react/prop-types */
import Icon from "./Icon";

function ProductReviews({ productReviews, totalStars }) {
  return (
    <div className="flex flex-col gap-4 text-secondary-dark">
      <h2 className="font-semibold text-2xl">Customer Reviews</h2>
      <div className="flex flex-col">
        {productReviews.map((review, index) => (
          <div
            key={index}
            className="flex flex-col gap-1 md:gap-0 py-3 md:py-4 px-1 md:px-2 border-t odd:bg-gray-50 even:bg-primary-light"
          >
            <div className="flex justify-between items-center">
              <div className="flex pointer-events-none">
                {Array(totalStars)
                  .fill()
                  .flat()
                  .map((_, i) => (
                    <Icon
                      key={i}
                      name={`${
                        i < review.rating ? "filledStar" : "outlineStar"
                      }`}
                      size="16"
                      className={`text-rate-color`}
                    />
                  ))}
              </div>
              <div className="text-xs md:text-base text-secondary-light">
                {review.date.split("T")[0]}
              </div>
            </div>

            <div className="flex flex-col items-start gap-1 md:gap-2 ps-1 md:ps-2">
              <div className="font-semibold text-sm md:text-base">
                {review.reviewerName}
              </div>
              <div className="text-xs md:text-base text-content-medium-dark">
                {review.comment}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default ProductReviews;
