/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";
import Subtotal from "./Subtotal";
import Total from "./Total";

function CheckoutSummary({ shippingFees }) {
  const [itemsCount, setItemsCount] = useState(0);
  const { cartList } = useCart();

  useEffect(() => {
    setItemsCount(cartList.reduce((acc, curr) => acc + curr.orderQuantity, 0));
  }, [cartList]);

  return (
    <div className="flex flex-col gap-3">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <span>Subtotal</span>
          <span className="w-1 h-1 bg-black rounded-full"></span>
          <span>{itemsCount} items</span>
        </div>
        <Subtotal />
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
        <Total total={total} newTotal={newTotal} shippingFees={shippingFees} />
      </div>
    </div>
  );
}
export default CheckoutSummary;
