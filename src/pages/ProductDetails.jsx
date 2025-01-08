import { useLocation, useParams } from "react-router-dom";
import Icon from "../components/Icon";
import GoBackButton from "../components/GoBackButton";
import ProductImages from "../components/ProductImages";
import ProductInfo from "../components/ProductInfo";
import ProductReviews from "../components/ProductReviews";

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
      <GoBackButton />

      <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-9 my-6 lg:px-6">
        <ProductImages images={product.images} productTitle={product.title} />
        <ProductInfo
          product={product}
          totalStars={RATING_TOTAL_STARS}
          minimumStock={MINIMUM_STOCK_LIMIT}
        />
      </div>

      <ProductReviews
        productReviews={product.reviews}
        totalStars={RATING_TOTAL_STARS}
      />
    </section>
  );
}
export default ProductDetails;
