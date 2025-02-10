/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";
import Subtotal from "./Subtotal";
import Total from "./Total";

function CheckoutSummary({ shippingFees, selectedCountry }) {
  const [itemsCount, setItemsCount] = useState(0);
  const { cartList, buyNowProduct, subtotal } = useCart();
  const FREE_SHIPPING_THRESHOLD = 500;
  const isEligibleForFreeShipping = subtotal >= FREE_SHIPPING_THRESHOLD;

  useEffect(() => {
    setItemsCount(cartList.reduce((acc, curr) => acc + curr.orderQuantity, 0));
  }, [cartList]);

  return (
    <div className="flex flex-col gap-3">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <span>Subtotal</span>
          <span className="w-1 h-1 bg-black rounded-full"></span>
          <span>{buyNowProduct ? "1 item" : `${itemsCount} items`}</span>
        </div>
        <Subtotal />
      </div>

      <div className="flex justify-between">
        <span>Shipping</span>
        <div className="flex items-center gap-5">
          {isEligibleForFreeShipping && selectedCountry && (
            <span className="font-semibold text-xs text-green-500">
              You&apos;ve got free shipping
            </span>
          )}
          <span
            className={`font-normal text-sm ${
              shippingFees ? "text-black" : "text-price-originalPrice"
            }`}
          >
            {shippingFees
              ? `$ ${shippingFees}`
              : shippingFees === 0
              ? "$0"
              : "Select country"}
          </span>
        </div>
      </div>

      <div className="flex justify-between font-semibold text-lg">
        <span>Total</span>
        <Total shippingFees={shippingFees} />
      </div>
    </div>
  );
}
export default CheckoutSummary;
