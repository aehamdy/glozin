/* eslint-disable react/prop-types */
import { useCheckout } from "../context/CheckoutContext";

function Subtotal({ className }) {
  const { subtotal, discountedSubtotal } = useCheckout();

  return (
    <div className="flex gap-3">
      {discountedSubtotal > 0 && (
        <span className={`${discountedSubtotal && "font-medium text-red-500"}`}>
          $ {discountedSubtotal.toFixed(2)}
        </span>
      )}
      <span className={`${className} ${discountedSubtotal && "line-through"}`}>
        $ {subtotal?.toFixed(2)}
      </span>
    </div>
  );
}
export default Subtotal;
