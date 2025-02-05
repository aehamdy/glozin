/* eslint-disable react/prop-types */
import Icon from "./Icon";

function ProductCardButton({
  icon,
  onClickFunc,
  productId,
  isInWishlist,
  variant,
}) {
  return (
    <button
      onClick={() => onClickFunc(productId)}
      className={`group relative flex justify-between top-0 -translate-y-1/4 md:-translate-y-0 end-0 p-3 md:p-3
      ${
        isInWishlist ? "bg-black" : "bg-slate-50"
      } text-secondary-dark hover:text-primary-light hover:bg-secondary-dark rounded-full shadow-md cursor-pointer duration-medium ${
        isInWishlist
          ? "text-white bg-primary-dark"
          : variant === "primary"
          ? "text-secondary-dark bg-primary-light border"
          : "bg-slate-50"
      } 
      ${
        variant !== "primary" && isInWishlist
          ? "text-primary-light"
          : "text-secondary-dark"
      }`}
    >
      <Icon name={icon} size="18" />
    </button>
  );
}
export default ProductCardButton;
