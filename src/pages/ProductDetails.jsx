import { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import Icon from "../components/Icon";
import Button from "../components/Button";
import Accordion from "../components/Accordion";
import safeBadgeImage from "../assets/safe-badge.webp";
import { freeShippingThreshold, shopConfig } from "../config/shopConfig";

function ProductDetails() {
  const { id } = useParams();
  const location = useLocation();
  const product = location.state;
  const [randomNumber, setRandomNumber] = useState();

  //   if (!product) {
  //     return (
  //       <p className="text-red-500">
  //         Product details not available. Please navigate from the product list.
  //       </p>
  //     );
  //   }

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
    <section className="m-horizontal-spacing p-horizontal-spacing">
      <Link
        to="/"
        className="group flex items-center justify-center w-fit bg-primary-light hover:bg-secondary-dark p-1.5 border rounded-tiny duration-medium"
      >
        <Icon
          name="leftArrow"
          className="text-secondary-dark group-hover:text-primary-light"
        />
      </Link>

      <div className="grid grid-cols-2 gap-9 my-6 px-6">
        <div className="flex flex-col gap-y-1">
          {product.images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`image of ${product.title}`}
              className="w-full object-cover"
            />
          ))}
        </div>
        <div className="product-details flex flex-col gap-2 items-start h-fit sticky top-8">
          <div className="flex flex-col items-start gap-1">
            {/* <p className="text-[15px] text-secondary-dark">{`Product ID: ${id}`}</p> */}
            <p className="text-[15px] text-secondary-dark select-none">
              {product.brand}
            </p>
            <h1 className="font-semibold text-[26px] text-secondary-dark tracking-tight">
              {product.title}
            </h1>
            <div className="flex justify-between items-center gap-5 my-1 w-fit">
              <div className="flex gap-1">
                {Array(Math.round(product.rating))
                  .fill()
                  .flat()
                  .map((_, index) => (
                    <Icon
                      key={index}
                      name="star"
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

          <div className="product-form flex flex-col gap-3 w-full mt-5 pt-8 border-t">
            <div className="flex justify-between items-center px-1">
              <input
                type="number"
                name=""
                id=""
                className="w-1/4 bg-primary-light border"
              />
              <Button
                value="Add to Cart"
                className="w-1/2 py-3 px-4 font-semibold text-lg text-primary-light bg-secondary-dark hover:bg-primary-dark rounded-medium "
              />
              <Icon
                name="wishlist"
                size="30"
                className="text-secondary-dark hover:fill-red-300"
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
              <Icon
                name="package"
                className="text-content-medium-dark"
                size="26"
              />
              <div>
                <p className="mb-1">Free shipping & returns: </p>
                <span className="font-semibold text-secondary-dark">
                  {`On all orders over $${freeShippingThreshold}`}
                </span>
              </div>
            </div>
          </div>

          <div className="safe-checkout flex flex-col gap-2">
            <p className="font-semibold text-secondary-dark">
              Guarantee Safe Checkout:
            </p>
            <div>
              <img
                src={safeBadgeImage}
                alt="safe badge image"
                className="max-w-full"
              />
            </div>
          </div>

          <div className="mt-2 px-3 text-start bg-gray-50 rounded-tiny">
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
      </div>
    </section>
  );
}
export default ProductDetails;
