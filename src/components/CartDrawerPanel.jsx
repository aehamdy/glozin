import { Link } from "react-router-dom";
import Subtotal from "./Subtotal";
import { useCart } from "../context/CartContext";
import calculateCartTotal from "../utils/calculateCartTotal";
import { useEffect } from "react";

function CartDrawerPanel() {
  const { setBuyNowProduct, cartState, setSubtotal } = useCart();
  const { cartList } = cartState;
  const cartTotal = calculateCartTotal(cartList);

  const handleClick = () => {
    setBuyNowProduct(null);
    setSubtotal(cartTotal);
  };

  useEffect(() => {
    setSubtotal(cartTotal);
  }, [cartList]);

  return (
    <div className="flex flex-col justify-between gap-6 mt-auto pt-4 pb-4 px-4 text-secondary-dark bg-cloud-gray border-t">
      <div className="flex justify-between font-semibold">
        <div>Subtotal:</div>
        <div>
          <Subtotal />
        </div>
      </div>
      <div className="flex flex-col items-center gap-5">
        <Link
          to="/checkout"
          onClick={handleClick}
          className=" w-3/4 py-3 font-semibold text-primary-light bg-secondary-dark hover:bg-primary-dark rounded-medium"
        >
          Checkout
        </Link>
      </div>
    </div>
  );
}
export default CartDrawerPanel;
