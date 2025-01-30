/* eslint-disable react/prop-types */
import { useCart } from "../context/CartContext";
import Subtotal from "./Subtotal";

function CheckoutSummary({ shippingFees }) {
  const { subtotal } = useCart();
  const total = subtotal + shippingFees;

  return (
    <div className="flex flex-col gap-3">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <span>Subtotal</span>
          <span className="w-1 h-1 bg-black rounded-full"></span>
          <span>items</span>
        </div>
        <div>
          $ <Subtotal />
        </div>
      </div>

      <div className="flex justify-between">
        <span>Shipping</span>
        <div>
          <span
            className={`font-normal text-sm ${
              shippingFees ? "text-black" : "text-price-originalPrice"
            }`}
          >
            {shippingFees ? `$ ${shippingFees}` : "Enter shipping address"}
          </span>
        </div>
      </div>

      <div className="flex justify-between font-semibold text-lg">
        <span>Total</span>
        <div className="flex gap-2">{total.toFixed(2)}</div>
      </div>
    </div>
  );
}
export default CheckoutSummary;
