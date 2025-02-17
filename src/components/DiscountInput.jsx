import { SET_COUPON_CODE } from "../constants/actionTypes";
import { useCheckout } from "../context/CheckoutContext";

/* eslint-disable react/prop-types */
function DiscountInput({ handleOnApplyClick }) {
  const { dispatchCheckout, usedCouponCode, discountError } = useCheckout();

  const onInputChange = (e) => {
    dispatchCheckout({
      type: SET_COUPON_CODE,
      payload: e.target.value.toUpperCase(),
    });
  };

  const handleEnterKeyPress = (e) => {
    if (usedCouponCode && e.key === "Enter") {
      handleOnApplyClick();
    }
  };

  return (
    <>
      <input
        type="text"
        placeholder="Enter discount code"
        onChange={onInputChange}
        onKeyUp={handleEnterKeyPress}
        value={usedCouponCode}
        className={`w-8/12 md:w-1/2 lg:w-3/5 py-3 px-2 font-medium placeholder:font-normal text-black placeholder:text-price-originalPrice bg-white border-2 ${
          discountError && "border-red-400 focus:border-red-400"
        } focus:border-blue-500 outline-none rounded-md`}
      />
    </>
  );
}
export default DiscountInput;
