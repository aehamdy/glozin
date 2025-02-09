import { Link } from "react-router-dom";
import Subtotal from "./Subtotal";
import { useCart } from "../context/CartContext";

function CartDrawerPanel() {
  const { setBuyNowProduct } = useCart();
  const handleClick = () => {
    setBuyNowProduct(null);
  };
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
