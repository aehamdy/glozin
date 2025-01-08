import { useLocation, useParams } from "react-router-dom";
import Icon from "../components/Icon";
import GoBackButton from "../components/GoBackButton";
import ProductImages from "../components/ProductImages";
import ProductInfo from "../components/ProductInfo";

function ProductDetails() {
  const { id } = useParams();
  const location = useLocation();
  const product = location.state;
  const RATING_TOTAL_STARS = 5;
  const MINIMUM_STOCK_LIMIT = 5;

  //   if (!product) {
  //     return (
  //       <p className="text-red-500">
  //         Product details not available. Please navigate from the product list.
  //       </p>
  //     );
  //   }

  return (
    <section className="m-horizontal-spacing lg:p-horizontal-spacing">
      {console.log(product)}
      <GoBackButton />

      <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-9 my-6 lg:px-6">
        <ProductImages images={product.images} productTitle={product.title} />
        <ProductInfo
          product={product}
          totalStars={RATING_TOTAL_STARS}
          minimumStock={MINIMUM_STOCK_LIMIT}
        />
      </div>

      <div className="flex flex-col gap-4 text-secondary-dark">
        <h2 className="font-semibold text-2xl">Customer Reviews</h2>
        <div className="flex flex-col">
          {product.reviews.map((review, index) => (
            <div
              key={index}
              className="flex flex-col py-4 px-2 border-t odd:bg-gray-50 even:bg-primary-light"
            >
              <div className="flex justify-between">
                <div className="flex pointer-events-none">
                  {Array(5)
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
                <div>{review.date.split("T")[0]}</div>
              </div>
              <div className="flex flex-col items-start gap-2 ps-2">
                <div className="font-semibold">{review.reviewerName}</div>
                <div className="text-content-medium-dark">{review.comment}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default ProductDetails;
