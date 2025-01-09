/* eslint-disable react/prop-types */
function ProductQuantityInput({ setProductQuantity, productQuantity }) {
  const decreaseQuantity = () =>
    setProductQuantity((prevVal) => (prevVal === 0 ? 0 : prevVal - 1));
  const increaseQuantity = () => setProductQuantity((prevVal) => prevVal + 1);

  return (
    <div className="flex items-center bg-[#F5F5F5] border rounded-medium overflow-hidden">
      <button
        type="button"
        onClick={decreaseQuantity}
        className="py-2 md:py-3 px-3 md:px-4 text-xl text-primary-dark bg-transparent hover:bg-gray-200"
        aria-label="Decrease amount"
      >
        -
      </button>
      <input
        type="number"
        value={productQuantity}
        className="quantity-input w-12 py-2 md:py-3 bg-transparent text-primary-dark text-center focus:outline-none"
        aria-label="Item amount"
      />
      <button
        type="button"
        onClick={increaseQuantity}
        className="py-2 md:py-3 px-3 md:px-4 text-xl text-primary-dark bg-transparent hover:bg-gray-200"
        aria-label="Increase amount"
      >
        +
      </button>
    </div>
  );
}
export default ProductQuantityInput;
