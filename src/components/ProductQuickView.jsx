/* eslint-disable react/prop-types */
// import Modal from "../common/Modal";
import Icon from "./Icon";
import ProductBrandName from "./ProductBrandName";
import ProductDeliveryShippingDetails from "./ProductDeliveryShippingDetails";
import ProductDesc from "./ProductDesc";
import ProductImages from "./ProductImages";
import ProductInventoryInfo from "./ProductInventoryInfo";
import ProductName from "./ProductName";
import ProductPolicies from "./ProductPolicies";
import ProductPrice from "./ProductPrice";
import ProductRate from "./ProductRate";
import ProductSafeCheckout from "./ProductSafeCheckout";
import ProductViewers from "./ProductViewers";

function ProductQuickView({ product, onClose }) {
  const RATING_TOTAL_STARS = 5;
  const MINIMUM_STOCK_LIMIT = 5;

  const handleOnCloseClick = () => {
    onClose();
  };

  return (
    // <Modal>
    <div className="fixed top-0 bottom-0 start-0 end-0 bg-black bg-opacity-50 backdrop-blur-sm z-overlay">
      <article className="absolute top-1/2 start-1/2 -translate-y-1/2 -translate-x-1/2 grid grid-cols-1 md:grid-cols-2 w-4/5 h-4/5 mx-auto text-black bg-white rounded-xl overflow-hidden">
        <Icon
          name="close"
          size="30"
          className="absolute top-0 end-0 m-1 p-1 text-black hover:rotate-90"
          onClickFunction={handleOnCloseClick}
        />
        <ProductImages images={product.images} productTitle={product.title} />

        <div className="flex flex-col gap-4 h-auto p-8 overflow-y-auto">
          <div className="flex flex-col items-start gap-1">
            {product.brand && <ProductBrandName brandName={product.brand} />}
            <ProductName productName={product.title} />
            <ProductRate
              productRate={product.rating}
              productReviews={product.reviews}
              totalStars={RATING_TOTAL_STARS}
            />
          </div>

          <ProductPrice productPrice={product.price} />

          <ProductDesc productDesc={product.description} />

          <ProductViewers />
          <ProductInventoryInfo
            sku={product.sku}
            stock={product.stock}
            minimumStock={MINIMUM_STOCK_LIMIT}
          />

          <ProductDeliveryShippingDetails />
          <ProductSafeCheckout />
          <ProductPolicies />
        </div>
      </article>
    </div>
    // </Modal>
  );
}
export default ProductQuickView;
