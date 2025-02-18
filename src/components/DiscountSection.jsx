/* eslint-disable react-hooks/exhaustive-deps */
import ApplyDiscountButton from "./ApplyDiscountButton";
import DiscountInput from "./DiscountInput";
import discountCodes from "../data/discountCodes";
import { useCheckout } from "../context/CheckoutContext";
import {
  SET_COUPON_CODE_AVAILABILITY,
  SET_USED_COUPON_CODE,
} from "../constants/actionTypes";

function DiscountSection() {
  const { dispatchCheckout, enteredCouponCode, couponErrorMessage } =
    useCheckout();

  const checkCodeAvailability = () => {
    return discountCodes.find(
      (code) =>
        code.code.toLowerCase() === enteredCouponCode.toLowerCase() &&
        code.active
    );
  };

  const handleOnApplyClick = () => {
    const availableCode = checkCodeAvailability();

    if (availableCode) {
      dispatchCheckout({ type: SET_COUPON_CODE_AVAILABILITY, payload: true });
      dispatchCheckout({ type: SET_USED_COUPON_CODE, payload: availableCode });
    } else {
      dispatchCheckout({ type: SET_COUPON_CODE_AVAILABILITY, payload: false });
    }

    return availableCode;
  };

  return (
    <div className="flex flex-col gap-2">
      <div className="flex justify-between">
        <DiscountInput handleOnApplyClick={handleOnApplyClick} />
        <ApplyDiscountButton handleOnApplyClick={handleOnApplyClick} />
      </div>
      {couponErrorMessage && (
        <p className="ps-1 text-start text-red-500">{couponErrorMessage}</p>
      )}
    </div>
  );
}
export default DiscountSection;
