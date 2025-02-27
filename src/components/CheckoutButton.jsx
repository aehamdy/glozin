import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useCheckout } from "../context/CheckoutContext";
import { SET_BUY_NOW_PRODUCT, SET_SUBTOTAL } from "../constants/actionTypes";

function CheckoutButton() {
  const { dispatchCart, cartList } = useCart();
  const { dispatchCheckout } = useCheckout();

  const handleOnClick = () => {
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
        Checkout
      </Link>
    </div>
  );
}
export default CheckoutButton;
