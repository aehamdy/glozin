import { Link, useLocation, useParams } from "react-router-dom";
import Icon from "../components/Icon";

function ProductDetails() {
  const { id } = useParams();
  const location = useLocation();
  const product = location.state;

  //   if (!product) {
  //     return (
  //       <p className="text-red-500">
  //         Product details not available. Please navigate from the product list.
  //       </p>
  //     );
  //   }

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
          {/* <img
            src="https://via.placeholder.com/500"
            alt=""
            className="w-full"
          /> */}
        </div>
        <div className="product-details flex flex-col items-start h-fit sticky top-8">
          <div className="flex flex-col items-start gap-1">
            {/* <p className="text-[15px] text-secondary-dark">{`Product ID: ${id}`}</p> */}
            <p className="text-[15px] text-secondary-dark select-none">
              {product.brand}
            </p>
            <h1 className="font-semibold text-[26px] text-secondary-dark tracking-tight">
              {product.title}
            </h1>
            <div className="flex justify-between items-center gap-5 my-1 w-fit">
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

          <div className="product-form"></div>
        </div>
      </div>
    </section>
  );
}
export default ProductDetails;
