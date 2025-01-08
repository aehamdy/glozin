/* eslint-disable react/prop-types */
import { freeShippingThreshold, shopConfig } from "../config/shopConfig";
import Accordion from "./Accordion";
import Button from "./Button";
import Icon from "./Icon";
import safeBadgeImage from "../assets/safe-badge.webp";
import ProductBrandName from "./ProductBrandName";
import ProductName from "./ProductName";
import ProductRate from "./ProductRate";
import ProductPrice from "./ProductPrice";
import ProductDesc from "./ProductDesc";
import ProductViewers from "./ProductViewers";
import ProductForm from "./ProductForm";

function ProductInfo({ product, totalStars }) {
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

      <ProductForm />

      <div className="product-details flex flex-col items-start gap-1 text-content-medium-dark text-start">
        <div className="flex">
          <div className="w-[90px]">SKU:</div>
          <span>{product.sku || "N/A"}</span>
        </div>

        <div className="flex">
          <div className="w-[90px]">Available: </div>
          <div>
            <span
              className={`${
                product.stock > 5
                  ? "text-emerald-500"
                  : product.stock <= 5
                  ? "text-gray-500"
                  : "text-red-500"
              }`}
            >
              {product.stock > 5
                ? "In Stock"
                : product.stock <= 5 && product.stock >= 1
                ? "Low Stock"
                : "Out of Stock"}
            </span>
          </div>
        </div>
      </div>

      <div className="deliver-shipping-details flex justify-around items-center w-full my-10 py-5 px-6 border rounded-tiny text-content-medium-dark">
        <div className="flex flex-col items-center gap-2">
          <Icon
            name="deliveryTruck"
            className="text-content-medium-dark"
            size="26"
          />
          <div>
            <p className="mb-1">Estimate delivery times: </p>
            <span className="font-semibold text-secondary-dark">
              3-5 days international.
            </span>
          </div>
        </div>
        <div className="flex flex-col items-center gap-2">
          <Icon name="package" className="text-content-medium-dark" size="26" />
          <div>
            <p className="mb-1">Free shipping & returns: </p>
            <span className="font-semibold text-secondary-dark">
              {`On all orders over $${freeShippingThreshold}`}
            </span>
          </div>
        </div>
      </div>

      <div className="safe-checkout flex flex-col items-center gap-2">
        <p className="font-semibold text-secondary-dark">
          Guarantee Safe Checkout:
        </p>
        <div className="w-3/4">
          <img
            src={safeBadgeImage}
            alt="safe badge image"
            className="max-w-full"
          />
        </div>
      </div>

      <div className="my-10 px-3 text-start bg-gray-50 rounded-tiny">
        <Accordion
          question={shopConfig.shippingDetails.title}
          answer={shopConfig.shippingDetails.content}
        />
        <Accordion
          question={shopConfig.returnPolicies.title}
          answer={shopConfig.returnPolicies.content}
        />
      </div>
    </div>
  );
}
export default ProductInfo;
