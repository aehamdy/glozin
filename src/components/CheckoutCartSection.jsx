/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import CheckoutSummary from "./CheckoutSummary";
import OrderSummaryButton from "./OrderSummaryButton";
import DiscountSection from "./DiscountSection";
import CheckoutProductList from "./CheckoutProductList";

function CheckoutCartSection({ shippingFees }) {
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
            <CheckoutProductList />
            <DiscountSection />
            <CheckoutSummary shippingFees={shippingFees} />
          </>
        )}
      </div>
    </>
  );
}
export default CheckoutCartSection;
