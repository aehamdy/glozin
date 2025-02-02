import { useState } from "react";

function DiscountInput() {
  const [couponCode, setCouponCode] = useState("");

  const onInputChange = (e) => {
    setCouponCode(e.target.value.toUpperCase());
  };

  return (
    <>
      {console.log(couponCode)}
      <input
        type="text"
        placeholder="Enter discount code"
        onChange={onInputChange}
        value={couponCode}
        className="w-9/12 md:w-1/2 lg:w-3/5 py-3 px-2 text-black placeholder:text-price-originalPrice bg-white border outline-none rounded-md"
      />
    </>
  );
}
export default DiscountInput;
