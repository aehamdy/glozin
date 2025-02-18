import { useCheckout } from "../context/CheckoutContext";

/* eslint-disable react/prop-types */
function ApplyDiscountButton({ handleOnApplyClick }) {
  const { enteredCouponCode } = useCheckout();

  const onButtonClick = () => {
    handleOnApplyClick();
  };

  return (
    <button
      onClick={() => onButtonClick()}
      disabled={!enteredCouponCode}
      className={`px-4 ${
        enteredCouponCode
          ? "font-medium text-white bg-blue-500 hover:bg-blue-600 active:bg-blue-700 focus:outline-none duration-short"
          : "text-content-light-dark bg-neutral-200 cursor-not-allowed"
      } rounded-md`}
    >
      Apply
    </button>
  );
}
export default ApplyDiscountButton;
