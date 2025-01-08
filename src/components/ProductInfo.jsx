/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { freeShippingThreshold, shopConfig } from "../config/shopConfig";
import Accordion from "./Accordion";
import Button from "./Button";
import Icon from "./Icon";
import safeBadgeImage from "../assets/safe-badge.webp";
import ProductBrandName from "./ProductBrandName";
import ProductName from "./ProductName";

function ProductInfo({ product }) {
  const [randomNumber, setRandomNumber] = useState();

  const generateRandomNumber = () => {
    const number = Math.ceil(Math.random() * 20 * 2);
    setRandomNumber(number < 15 ? number + 10 : number);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      generateRandomNumber();
    }, 7000);

    return () => {
      clearInterval(intervalId);
    };
  }, [randomNumber]);

  return (
    <div className="product-details flex flex-col gap-2 items-start h-fit sticky top-8">
      <div className="flex flex-col items-start gap-1">
        <ProductBrandName brandName={product.brand} />
        <ProductName productName={product.title} />
        <div className="flex justify-between items-center gap-5 my-1 w-fit">
          <div className="flex gap-1">
            {Array(5)
              .fill()
              .flat()
              .map((_, index) => (
                <Icon
                  key={index}
                  name={`${
                    index < Math.round(product.rating)
                      ? "filledStar"
                      : "outlineStar"
                  }`}
                  size="16"
                  className="text-rate-color"
                />
              ))}
          </div>
          <span className="text-[15px] text-content-medium-dark">
            {product.reviews?.length || 0} reviews
          </span>
        </div>
      </div>

      <div className="prices flex items-center my-2 font-semibold text-3xl">
        {product.discountPercentage < 10 && (
          <span className="me-3 text-[26px] text-price-salePrice">
            {product.discountPercentage < 10 &&
              `$${Math.ceil(
                (
                  (product.price *
                    (product.price - product.discountPercentage)) /
                  100
                ).toFixed(2)
              )}.00`}
          </span>
        )}
        <span
          className={`${
            product.discountPercentage < 10
              ? "font-extralight text-xl text-price-originalPrice line-through"
              : "text-secondary-dark"
          }`}
        >
          ${product.price}
        </span>
      </div>

      <p className="text-[15px] text-start text-content-medium-dark leading-7">
        {product.description}
      </p>

      <div className="flex items-center gap-3 text-content-medium-dark">
        <div className="p-1 bg-secondary-dark rounded-tiny">
          <Icon
            name="eye"
            size="18"
            className="text-primary-light select-none"
          />
        </div>
        <div className="flex items-center gap-2">
          <p>{randomNumber}</p>
          <p className=""> people are viewing this right now</p>
        </div>
      </div>

      <div className="product-form flex flex-col gap-5 w-full my-5 pt-8 border-t">
        <div className="flex justify-between items-center px-1">
          <div className="flex items-center bg-[#F5F5F5] border rounded-medium overflow-hidden">
            <button
              type="button"
              className="py-3 px-4 text-xl text-primary-dark bg-transparent hover:bg-gray-200"
              aria-label="Decrease amount"
            >
              -
            </button>
            <input
              type="number"
              className="quantity-input w-12 py-3 bg-transparent text-primary-dark text-center focus:outline-none"
              aria-label="Item amount"
            />
            <button
              type="button"
              className="py-3 px-4 text-xl text-primary-dark bg-transparent hover:bg-gray-200"
              aria-label="Increase amount"
            >
              +
            </button>
          </div>
          <Button
            value="Add to Cart"
            className="w-1/2 py-3 px-4 font-semibold text-lg text-primary-light bg-secondary-dark hover:bg-primary-dark rounded-medium "
          />
          <div className="addtowishlist-button group relative p-4 bg-primary-light hover:bg-secondary-dark border rounded-full cursor-pointer duration-medium">
            <div className="tooltip absolute -top-5 group-hover:-top-7 start-0 -translate-x-1/4 w-24 py-1 text-xs text-primary-light bg-primary-dark rounded-md opacity-0 group-hover:opacity-100 z-[-1] group-hover:z-40 pointer-events-none duration-300">
              Add to wishlist
            </div>
            <Icon
              name="wishlist"
              size="18"
              className="text-secondary-dark group-hover:text-primary-light group-hover:fill-secondar-dark"
            />
          </div>
        </div>

        <div className="flex flex-col gap-4 px-1">
          <div className="flex items-cetner gap-4">
            <input type="checkbox" name="" id="" className="" />
            <p className="flex gap-1 text-secondary-dark">
              I agree with{" "}
              <span className="font-semibold text-secondary-dark">
                Terms & Conditions
              </span>
            </p>
          </div>
          <Button
            value="Buy Now"
            className={`text-primary-light bg-red-300 py-2.5 rounded-medium`}
          />
        </div>
      </div>

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
