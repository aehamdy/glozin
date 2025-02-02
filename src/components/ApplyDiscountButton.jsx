/* eslint-disable react/prop-types */
function ApplyDiscountButton({ couponCode }) {
  return (
    <button
      disabled={!couponCode}
      className={`px-4 ${
        couponCode
          ? "font-medium text-white bg-blue-500 hover:bg-blue-600 active:bg-blue-700 duration-short"
          : "text-content-light-dark bg-neutral-200"
      } rounded-md`}
    >
      Apply
    </button>
  );
}
export default ApplyDiscountButton;
