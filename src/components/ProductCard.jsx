/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import Icon from "./Icon";
import Button from "./Button";
import ProductCardQuickButtons from "./ProductCardQuickButtons";

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
          <ProductCardQuickButtons productId={product.id} />
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
