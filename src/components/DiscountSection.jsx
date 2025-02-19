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
      (coupon) => coupon.code.toLowerCase() === enteredCouponCode.toLowerCase()
    );
  };

  const handleOnApplyClick = () => {
    const discountCode = checkCodeAvailability();

    if (!discountCode || !discountCode.active) {
      dispatchCheckout({ type: SET_COUPON_CODE_AVAILABILITY, payload: false });
    } else {
      dispatchCheckout({ type: SET_COUPON_CODE_AVAILABILITY, payload: true });
      dispatchCheckout({ type: SET_USED_COUPON_CODE, payload: discountCode });
    }
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
