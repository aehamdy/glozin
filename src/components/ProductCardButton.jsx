/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import Icon from "./Icon";
import Tooltip from "./Tooltip";

function ProductCardButton({
  icon,
  onClickFunc,
  productId,
  isInWishlist,
  variant,
  tooltipValue,
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
      className={`group/button relative flex justify-center items-center p-2 md:p-3 text-secondary-dark 
        hover:text-primary-light hover:bg-secondary-dark rounded-full shadow-md cursor-pointer duration-medium 
        ${icon === "cart" && "lg:hidden"} 
      ${
        isInWishlist ? "bg-black" : "bg-slate-50"
      } text-secondary-dark hover:text-primary-light hover:bg-secondary-dark rounded-full shadow-md cursor-pointer duration-medium 
      ${
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
      <Tooltip value={tooltipValue} />
      <Icon name={icon} size={iconSize} />
    </button>
  );
}
export default ProductCardButton;
