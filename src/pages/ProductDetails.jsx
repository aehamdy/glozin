import { useLocation, useParams } from "react-router-dom";
import GoBackButton from "../components/GoBackButton";
import ProductImages from "../components/ProductImages";
import ProductInfo from "../components/ProductInfo";
import ProductReviews from "../components/ProductReviews";
import { shopConfig } from "../config/shopConfig";

function ProductDetails() {
  const { id } = useParams();
  const location = useLocation();
  const product = location.state;

  return (
    <section className="m-horizontal-spacing lg:p-horizontal-spacing">
      <GoBackButton />
      <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-9 my-6 lg:px-6">
        <ProductImages images={product.images} productTitle={product.title} />
        <ProductInfo
          product={product}
          totalStars={shopConfig.ratingTotalStars}
          minimumStock={shopConfig.minimumStockLimit}
        />
      </div>

      <ProductReviews
        productReviews={product.reviews}
        totalStars={shopConfig.ratingTotalStars}
      />
    </section>
  );
}
export default ProductDetails;
