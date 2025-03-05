/* eslint-disable react/prop-types */
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useCheckout } from "../context/CheckoutContext";
import { SET_BUY_NOW_PRODUCT, SET_SUBTOTAL } from "../constants/actionTypes";
import { useState } from "react";
import LoaderCircular from "./LoaderCircular";
import ROUTES from "../config/routes";

function CheckoutButton({ handleCloseCart }) {
  const { dispatchCart, cartList } = useCart();
  const { dispatchCheckout } = useCheckout();
  const [isLoading, setIsLoading] = useState(false);
  const navigateTo = useNavigate();
  const navigationTime = 2200;

  const handleOnClick = (e) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      dispatchCart({ type: SET_BUY_NOW_PRODUCT, payload: null });
      dispatchCheckout({ type: SET_SUBTOTAL, payload: cartList });
      setIsLoading(false);
      handleCloseCart();
      navigateTo(ROUTES.CHECKOUT);
    }, navigationTime);
  };

  return (
    <div className="flex flex-col items-center gap-5">
      <Link
        onClick={handleOnClick}
        className=" w-3/4 py-3 font-semibold text-primary-light bg-secondary-dark hover:bg-primary-dark rounded-medium"
      >
        {isLoading ? (
          <LoaderCircular
            loaderColor="border-blue-500"
            text="Packing your order... 🎁"
          />
        ) : (
          "Checkout"
        )}
      </Link>
    </div>
  );
}
export default CheckoutButton;
