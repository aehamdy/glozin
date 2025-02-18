/* eslint-disable react-hooks/exhaustive-deps */
import ApplyDiscountButton from "./ApplyDiscountButton";
import DiscountInput from "./DiscountInput";
import discountCodes from "../data/discountCodes";
import { useCheckout } from "../context/CheckoutContext";

function DiscountSection() {
  const { enteredCouponCode, couponErrorMessage } = useCheckout();

  const checkCodeAvailability = () => {
    return discountCodes.find(
      (code) =>
        code.code.toLowerCase() === enteredCouponCode.toLowerCase() &&
        code.active
    );
  };

  const handleOnApplyClick = () => {
    const availableCode = checkCodeAvailability();

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
