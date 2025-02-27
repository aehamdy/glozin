import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useCheckout } from "../context/CheckoutContext";
import { SET_BUY_NOW_PRODUCT, SET_SUBTOTAL } from "../constants/actionTypes";
import { useState } from "react";
import LoaderCircular from "./LoaderCircular";

function CheckoutButton() {
  const { dispatchCart, cartList } = useCart();
  const { dispatchCheckout } = useCheckout();
  const [isLoading, setIsLoading] = useState(false);

  const handleOnClick = () => {
    setIsLoading(true);

    dispatchCart({ type: SET_BUY_NOW_PRODUCT, payload: null });
    dispatchCheckout({ type: SET_SUBTOTAL, payload: cartList });
  };

  return (
    <div className="flex flex-col items-center gap-5">
      <Link
        to="/checkout"
        onClick={handleOnClick}
        className=" w-3/4 py-3 font-semibold text-primary-light bg-secondary-dark hover:bg-primary-dark rounded-medium"
      >
        {isLoading ? <LoaderCircular /> : "Checkout"}
      </Link>
    </div>
  );
}
export default CheckoutButton;
