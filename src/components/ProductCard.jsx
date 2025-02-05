/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import ProductCardQuickButtons from "./ProductCardQuickButtons";

function ProductCard({ product, salePrice, removeFromWishlist }) {
  return (
    <article className="group relative rounded-small shadow-sm hover:shadow-xl overflow-hidden cursor-pointer duration-medium">
      <ProductCardQuickButtons
        product={product}
        removeFromWishlist={removeFromWishlist}
      />

      <Link to={`/product/${product.id}`} state={product}>
        <div className="relative flex justify-center rounded-small group-hover:rounded-b-none overflow-hidden">
          <img
            src={product.images[0]}
            alt={product.title + " Image"}
            className="w-full h-auto object-cover"
          />
        </div>

        <div className="flex flex-col gap-1 lg:gap-3 my-2 lg:my-2.5 text-center">
          <h3 className="mt-5 font-semibold text-sm lg:text-lg text-secondary-dark">
            {product.title}
          </h3>

          <div className="flex justify-center items-center gap-1 text-sm lg:text-lg">
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
