/* eslint-disable react/prop-types */
import ProductBrandName from "./ProductBrandName";
import ProductName from "./ProductName";
import ProductRate from "./ProductRate";
import ProductPrice from "./ProductPrice";
import ProductDesc from "./ProductDesc";
import ProductViewers from "./ProductViewers";
import ProductForm from "./ProductForm";
import ProductInventoryInfo from "./ProductInventoryInfo";
import ProductDeliveryShippingDetails from "./ProductDeliveryShippingDetails";
import ProductSafeCheckout from "./ProductSafeCheckout";
import ProductPolicies from "./ProductPolicies";

function ProductInfo({ product, totalStars, minimumStock }) {
  return (
    <div className="product-details flex flex-col gap-2 items-start h-fit sticky top-8">
      <div className="flex flex-col items-start gap-1">
        {product.brand && <ProductBrandName brandName={product.brand} />}
        <ProductName productName={product.title} />
        <ProductRate
          productRate={product.rating}
          productReviews={product.reviews}
          totalStars={totalStars}
        />
      </div>

      <ProductPrice
        productPrice={product.price}
        productDiscountPercentage={product.discountPercentage}
      />

      <ProductDesc productDesc={product.description} />

      <ProductViewers />

      <ProductForm productId={product.id} />

      <ProductInventoryInfo
        sku={product.sku}
        stock={product.stock}
        minimumStock={minimumStock}
      />

      <ProductDeliveryShippingDetails />
      <ProductSafeCheckout />
      <ProductPolicies />
    </div>
  );
}
export default ProductInfo;
