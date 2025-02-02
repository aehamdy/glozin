import { useState } from "react";
import ApplyDiscountButton from "./ApplyDiscountButton";
import DiscountInput from "./DiscountInput";

function DiscountSection() {
  const [couponCode, setCouponCode] = useState("");

  return (
    <div className="flex justify-between">
      <DiscountInput couponCode={couponCode} setCouponCode={setCouponCode} />
      <ApplyDiscountButton couponCode={couponCode} />
    </div>
  );
}
export default DiscountSection;
