/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import ProductCardQuickButtons from "./ProductCardQuickButtons";

function ProductCard({ product, salePrice, removeFromWishlist }) {
  // const handleRemoveFromWishlist = (productId) => {
  //   removeFromWishlist(productId);
  // };

  return (
    <article className="group relative rounded-small shadow-sm hover:shadow-xl overflow-hidden cursor-pointer duration-medium">
      <ProductCardQuickButtons
        productId={product.id}
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

        <div className="flex flex-col gap-3 my-4 text-center">
          <h3 className="px-3 font-semibold text-sm lg:text-xl text-secondary-dark">
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
