/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import Icon from "./Icon";

function ProductCardButton({
  icon,
  onClickFunc,
  productId,
  isInWishlist,
  variant,
}) {
  const [iconSize, setIconSize] = useState(18);

  useEffect(() => {
    const updateSize = () => {
      if (window.innerWidth >= 1024) {
        setIconSize(18);
      } else if (window.innerWidth >= 768) {
        setIconSize(18);
      } else {
        setIconSize(14);
      }
    };

    updateSize();
    window.addEventListener("resize", updateSize);

    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <button
      onClick={() => onClickFunc(productId)}
      className={`group relative flex justify-between top-1 md:top-0 -translate-y-1/4 md:-translate-y-0 -end-2.5 md:-end-1 lg:end-0 p-1.5 md:p-3
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
      <Icon name={icon} size={iconSize} />
    </button>
  );
}
export default ProductCardButton;
