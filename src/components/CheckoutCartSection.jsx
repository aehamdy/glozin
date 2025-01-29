import { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";
import ProductCartInCheckout from "./ProductCartInCheckout";

function CheckoutCartSection() {
  const { cartList } = useCart();
  const [subtotal, setSubtotal] = useState(0);

  useEffect(() => {
    setSubtotal(cartList.reduce((acc, curr) => acc + curr.price, 0));
  }, [cartList]);

  return (
    <div className="col-span-6 sticky top-0 h-[100dvh] space-y-8 pt-8 pb-16 px-8 lg:px-8 text-[15px] text-black bg-cloud-gray">
      <div className="flex flex-col gap-3">
        {cartList.map((product, index) => (
          <ProductCartInCheckout key={index} product={product} />
        ))}
      </div>

      <div className="flex flex-col gap-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span>Subtotal</span>
            <span className="w-1 h-1 bg-black rounded-full"></span>
            <span>items</span>
          </div>
          <div>${subtotal.toFixed(2)}</div>
        </div>

        <div className="flex justify-between">
          <span>Shipping</span>
          <div>
            <span className="font-normal text-sm text-price-originalPrice">
              Enter shipping address
            </span>
          </div>
        </div>

        <div className="flex justify-between font-semibold text-lg">
          <span>Total</span>
          <div className="flex gap-2">
            <span className="font-normal text-sm text-price-originalPrice">
              USD
            </span>
            <span>$</span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default CheckoutCartSection;
