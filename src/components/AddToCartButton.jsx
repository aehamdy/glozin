/* eslint-disable react/prop-types */
import { ADD_TO_CART } from "../constants/actionTypes";
import { useCart } from "../context/CartContext";
import Button from "./Button";

function AddToCartButton({ variant, productQuantity, product }) {
  const { dispatchCart } = useCart();

  const handleClick = () => {
    dispatchCart({
      type: ADD_TO_CART,
      payload: {
        ...product,
        orderQuantity: productQuantity ? productQuantity : 1,
      },
    });
  };

  let styles;
  if (variant === "quickButton") {
    styles =
      "hidden lg:block absolute bottom-[15%] group-hover:bottom-[20%] start-1/2 -translate-x-1/2 w-3/5 py-2 text-lg text-primary-light bg-secondary-dark hover:bg-primary-dark rounded-medium opacity-0 group-hover:opacity-100 group-hover:z-[80] transition-all ease-in-out duration-medium";
  } else if (variant === "productDetails") {
    styles = `w-1/2 py-2.5 md:py-3 px-4 font-semibold text-base lg:text-lg text-primary-light ${
      productQuantity > 0
        ? "bg-secondary-dark hover:bg-primary-dark active:bg-gray-800"
        : "bg-gray-300"
    } rounded-medium`;
  }

  return (
    <Button value="Add to Cart" handleClick={handleClick} className={styles} />
  );
}
export default AddToCartButton;
