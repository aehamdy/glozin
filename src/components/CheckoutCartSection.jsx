/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";
import ProductCartInCheckout from "./ProductCartInCheckout";
import CheckoutSummary from "./CheckoutSummary";
import OrderSummaryButton from "./OrderSummaryButton";
import DiscountSection from "./DiscountSection";

function CheckoutCartSection({ shippingFees }) {
  const { cartList } = useCart();
  const [summary, setSummary] = useState(true);

  const handleSummary = () => {
    setSummary((prev) => !prev);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setSummary(true);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <OrderSummaryButton
        summary={summary}
        handleSummary={handleSummary}
        shippingFees={shippingFees}
      />

      <div
        className={`lg:block ${summary ? "block" : "hidden"} 
        col-span-6 lg:sticky lg:top-0 space-y-8
        pt-4 lg:pt-8 pb-3 px-8 lg:px-8 lg:pb-16
          text-[15px] text-black bg-cloud-gray`}
      >
        {summary && (
          <>
            <div className="flex flex-col gap-3">
              {cartList.map((product, index) => (
                <ProductCartInCheckout key={index} product={product} />
              ))}
            </div>
            <DiscountSection />
            <CheckoutSummary shippingFees={shippingFees} />
          </>
        )}
      </div>
    </>
  );
}
export default CheckoutCartSection;
