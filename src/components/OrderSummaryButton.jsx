/* eslint-disable react/prop-types */
import { useCart } from "../context/CartContext";
import Icon from "./Icon";

function OrderSummaryButton({ summary, handleSummary, shippingFees }) {
  const { subtotal } = useCart();
  const total = subtotal + shippingFees;

  return (
    <div className="lg:hidden flex justify-between -mt-1 lg:mt-0 py-4 px-5 bg-cloud-gray border">
      <button type="button" onClick={handleSummary}>
        <div className="flex items-center gap-3 text-sm text-blue-800 cursor-pointer">
          <span>Order Summary</span>
          {summary ? (
            <Icon name="upChevronArrow" size="14" />
          ) : (
            <Icon name="downChevronArrow" size="14" />
          )}
        </div>
      </button>

      <div className="font-semibold">$ {total.toFixed(2)}</div>
    </div>
  );
}
export default OrderSummaryButton;
