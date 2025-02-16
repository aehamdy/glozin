import { Link } from "react-router-dom";
import Subtotal from "./Subtotal";
import { useCart } from "../context/CartContext";
import { SET_BUY_NOW_PRODUCT, SET_SUBTOTAL } from "../constants/actionTypes";
import { useCheckout } from "../context/CheckoutContext";

function CartDrawerPanel() {
  const { dispatchCart, cartList } = useCart();
  const { dispatchCheckout, subtotal } = useCheckout();

  const handleOnClick = () => {
    dispatchCart({ type: SET_BUY_NOW_PRODUCT, payload: null });
    dispatchCheckout({ type: SET_SUBTOTAL, payload: cartList });
  };

  return (
    <div className="flex flex-col justify-between gap-6 mt-auto pt-4 pb-4 px-4 text-secondary-dark bg-cloud-gray border-t">
      <div className="flex justify-between font-semibold">
        <div>Subtotal:</div>
        <Subtotal subtotalValue={subtotal} />
      </div>
      <div className="flex flex-col items-center gap-5">
        <Link
          to="/checkout"
          onClick={handleOnClick}
          className=" w-3/4 py-3 font-semibold text-primary-light bg-secondary-dark hover:bg-primary-dark rounded-medium"
        >
          Checkout
        </Link>
      </div>
    </div>
  );
}
export default CartDrawerPanel;
