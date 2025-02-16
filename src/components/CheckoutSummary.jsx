import { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";
import Subtotal from "./Subtotal";
import Total from "./Total";
import { useCheckout } from "../context/CheckoutContext";
import { useUserData } from "../context/UserDataContext";

function CheckoutSummary() {
  const [itemsCount, setItemsCount] = useState(0);
  const { cartList, buyNowProduct } = useCart();
  const {
    subtotal,
    shippingFees,
    isEligibleForFreeShipping,
    discountedShippingFees,
  } = useCheckout();
  const { countryValue } = useUserData();

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
        <Subtotal
          subtotalValue={buyNowProduct ? buyNowProduct.price : subtotal}
        />
      </div>

      <div className="flex justify-between">
        <span>Shipping</span>

        <div className="flex items-center gap-5">
          {isEligibleForFreeShipping && (
            <span className="font-semibold text-xs text-green-500">
              You&apos;ve got free shipping
            </span>
          )}

          <span
            className={`font-normal text-sm ${
              shippingFees ? "text-black" : "text-price-originalPrice"
            }`}
          >
            {isEligibleForFreeShipping && countryValue
              ? `$ ${discountedShippingFees}`
              : isEligibleForFreeShipping && !countryValue
              ? "Select country"
              : shippingFees && countryValue
              ? `$ ${shippingFees}`
              : "Select country"}
          </span>
        </div>
      </div>

      <div className="flex justify-between font-semibold text-lg">
        <span>Total</span>
        <Total />
      </div>
    </div>
  );
}
export default CheckoutSummary;
