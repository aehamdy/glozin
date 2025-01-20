/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import Icon from "./Icon";
import ProductCardQuickButtons from "./ProductCardQuickButtons";

function ProductCard({ product, salePrice, removeFromWishlist }) {
  const handleRemoveFromWishlist = (productId) => {
    removeFromWishlist(productId);
  };

  return (
    <article className="group relative rounded-small shadow-sm hover:shadow-xl overflow-hidden cursor-pointer duration-medium">
      {removeFromWishlist && (
        <button
          onClick={() => handleRemoveFromWishlist(product.id)}
          className="group absolute top-2 end-2 bg-primary-light shadow-md rounded-full duration-medium z-10"
        >
          <Icon
            name="close"
            className="m-2 text-content-medium-dark duration-medium"
          />
        </button>
      )}
      <ProductCardQuickButtons productId={product.id} />

      <Link to={`/product/${product.id}`} state={product}>
        <div className="relative flex justify-center rounded-small group-hover:rounded-b-none overflow-hidden">
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
