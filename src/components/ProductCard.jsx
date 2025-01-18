/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import Icon from "./Icon";
import Button from "./Button";

function ProductCard({ product, salePrice, removeFromWishlist }) {
  const handleRemoveFromWishlist = (productId) => {
    removeFromWishlist(productId);
  };
  return (
    <article className="relative group rounded-small shadow-sm hover:shadow-xl overflow-hidden cursor-pointer duration-medium">
      {removeFromWishlist && (
        <button
          onClick={() => handleRemoveFromWishlist(product.id)}
          className="group absolute top-2 end-2 bg-primary-light shadow-md rounded-full duration-medium z-10"
        >
          <Icon
            name="close"
            // size="17"
            className="m-2 text-content-medium-dark duration-medium"
          />
        </button>
      )}
      <Link to={`/product/${product.id}`} state={product}>
        <div className="relative flex justify-center rounded-small group-hover:rounded-b-none overflow-hidden">
          <div className="absolute top-0 start-0 w-full h-full">
            <div className="relative w-full h-full">
              <div className="absolute top-5 -end-8 group-hover:end-5 flex flex-col gap-4 opacity-0 group-hover:opacity-100 transition-all duration-medium">
                <button
                  className={`group absolute md:relative top-0 -translate-y-1/4 md:-translate-y-0 end-0 p-3 md:p-4 text-primary-dark hover:text-white bg-slate-50 hover:bg-secondary-dark rounded-full cursor-pointer duration-medium`}
                >
                  <Icon name="wishlist" size="18" className={``} />
                </button>
              </div>
              <Button
                value="Add to Cart"
                className="absolute -bottom-8 group-hover:bottom-5 start-1/2 -translate-x-1/2 w-3/5 py-2.5 text-lg text-primary-light bg-secondary-dark hover:bg-primary-dark rounded-medium opacity-0 group-hover:opacity-100 transition-all ease-in-out duration-medium"
              />
            </div>
          </div>
          <img
            src={product.images[0]}
            alt={product.title + " Image"}
            className="w-full h-auto object-cover"
          />
        </div>

        <div className="flex flex-col gap-3 my-4 text-center">
          <h3 className="px-3 font-semibold text-xl text-secondary-dark">
            {product.title}
          </h3>

          <div className="flex justify-center items-center gap-1 text-lg">
            <h4
              className={`${
                product.sale
                  ? "line-through text-content-medium-dark"
                  : "text-secondary-dark"
              }`}
            >
              {product.price && "$"} {product.price}
            </h4>
          </div>
        </div>
      </Link>
    </article>
  );
}
export default ProductCard;

{
  /* <div className="grid grid-cols-3">
{products.map((product) => {
  const salePrice =
    product.price - (product.price * product.discountPercentage) / 100;
  return (
    <article
      key={product.id}
      className="flex flex-col gap-2 text-secondary-dark"
    >
      <div>
        <img
          src={product.images[0]}
          alt=""
          className="max-w-full w-full h-auto object-cover"
        />
      </div>
      <div className="flex flex-col gap-2 text-secondary-dark">
        <h3>{product.title}</h3>
        <div>
          <h4
            className={`font-semibold ${
              product.discountPercentage < 17.5
                ? "line-through font-normal text-price-originalPrice"
                : ""
            }`}
          >
            ${product.price}
          </h4>
          {product.discountPercentage < 17.5 && (
            <h3 className="font-semibold text-red-500">
              ${salePrice.toFixed(2)}
            </h3>
          )}
        </div>
      </div>
    </article>
  );
})}
</div> */
}
