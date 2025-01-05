import { Link, useParams } from "react-router-dom";
import Icon from "../components/Icon";

function ProductDetails() {
  const { id } = useParams();
  return (
    <section className="m-horizontal-spacing p-horizontal-spacing">
      <Link
        to=""
        className="group flex items-center justify-center w-fit bg-primary-light hover:bg-secondary-dark p-1.5 border rounded-tiny duration-medium"
      >
        <Icon
          name="leftArrow"
          className="text-secondary-dark group-hover:text-primary-light"
        />
      </Link>

      <div className="grid grid-cols-2 gap-9 my-6 px-6">
        <div className="flex flex-col gap-y-1">
          <img
            src="https://via.placeholder.com/500"
            alt=""
            className="w-full"
          />
          <img
            src="https://via.placeholder.com/500"
            alt=""
            className="w-full"
          />
          <img
            src="https://via.placeholder.com/500"
            alt=""
            className="w-full"
          />
          <img
            src="https://via.placeholder.com/500"
            alt=""
            className="w-full"
          />
        </div>
        <div className="product-details h-fit sticky top-8">
          <div className="flex flex-col">
            <p className="text-[15px] text-secondary-dark">{`Product ID: ${id}`}</p>
            <p className="text-[15px] text-secondary-dark">Brand</p>
            <h1 className="font-semibold text-[26px] text-secondary-dark tracking-tight">
              Prodcut Name
            </h1>
            <div className="flex justify-between w-fit">
              <span></span>
              <span className="text-[15px] text-content-medium-dark">
                Reviews Number
              </span>
            </div>
          </div>
          <div className="prices flex">
            <span className="font-semibold text-[26px] text-price-salePrice">
              Sale Price
            </span>
            <span className="">Price</span>
          </div>
          <p className="text-[15px] text-content-medium-dark leading-7">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
            voluptatum, dolorum eveniet incidunt aliquid tempora. Assumenda
            animi sequi molestiae dolor dolorum. Maxime id perferendis dolore
            saepe eius voluptates incidunt fuga!
          </p>
          <div className="product-form"></div>
          <div className="product-details">
            <span>SKU:</span>
            <span>Availability:</span>
          </div>
        </div>
      </div>
    </section>
  );
}
export default ProductDetails;
