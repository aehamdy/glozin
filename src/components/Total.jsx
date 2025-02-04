/* eslint-disable react/prop-types */
import { useCart } from "../context/CartContext";

function Total({ shippingFees }) {
  const { subtotal, newSubtotal } = useCart();
  const total = subtotal + shippingFees;
  const newTotal = newSubtotal + shippingFees;

  return (
    <div className="flex items-center gap-3">
      {newTotal > 0 && (
        <div className={`text-red-500`}>$ {newTotal.toFixed(2)}</div>
      )}
      <div
        className={`flex gap-2 ${
          newTotal && "font-medium text-base text-secondary-dark line-through"
        }`}
      >
        $ {total.toFixed(2)}
      </div>
    </div>
  );
}
export default Total;
