/* eslint-disable react/prop-types */
function DiscountInput({ setDiscount, discount }) {
  const onInputChange = (e) => {
    setDiscount({ ...discount, codeValue: e.target.value.toUpperCase() });
  };

  return (
    <>
      <input
        type="text"
        placeholder="Enter discount code"
        onChange={onInputChange}
        value={discount.codeValue}
        className="w-8/12 md:w-1/2 lg:w-3/5 py-3 px-2 font-medium placeholder:font-normal text-black placeholder:text-price-originalPrice bg-white border-2 focus:border-blue-500 outline-none rounded-md"
      />
    </>
  );
}
export default DiscountInput;
