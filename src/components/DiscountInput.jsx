/* eslint-disable react/prop-types */
function DiscountInput({ setDiscount, discount }) {
  const onInputChange = (e) => {
    setDiscount({ ...discount, codeValue: e.target.value.toUpperCase() });
  };

  return (
    <div className="flex flex-col gap-2 w-8/12 md:w-1/2 lg:w-3/5 ">
      <input
        type="text"
        placeholder="Enter discount code"
        onChange={onInputChange}
        value={discount.codeValue}
        className="w-full py-3 px-2 font-medium placeholder:font-normal text-black placeholder:text-price-originalPrice bg-white border-2 focus:border-blue-500 outline-none rounded-md"
      />
      {discount.error && (
        <p className="ps-2 text-start text-red-500">{discount.error}</p>
      )}
    </div>
  );
}
export default DiscountInput;
