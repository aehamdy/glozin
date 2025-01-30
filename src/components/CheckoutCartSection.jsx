import { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";
import ProductCartInCheckout from "./ProductCartInCheckout";
import Icon from "./Icon";
import Subtotal from "./Subtotal";
import CheckoutSummary from "./CheckoutSummary";

function CheckoutCartSection() {
  const { cartList } = useCart();
  const [summary, setSummary] = useState(true);

  const onSummaryClick = () => {
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
      <div className="lg:hidden flex justify-between py-4 px-5 bg-cloud-gray border">
        <button type="button" onClick={onSummaryClick} className="">
          <div className="flex items-center gap-3 text-sm text-blue-800 cursor-pointer">
            <span>Order Summary</span>
            {summary ? (
              <Icon name="upChevronArrow" size="14" />
            ) : (
              <Icon name="downChevronArrow" size="14" />
            )}
          </div>
        </button>
        <div className="font-semibold">
          $ <Subtotal />
        </div>
      </div>

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

            <CheckoutSummary />
          </>
        )}
      </div>
    </>
  );
}
export default CheckoutCartSection;
