function ProductQuantityInput() {
  return (
    <div className="flex items-center bg-[#F5F5F5] border rounded-medium overflow-hidden">
      <button
        type="button"
        className="py-2 md:py-3 px-3 md:px-4 text-xl text-primary-dark bg-transparent hover:bg-gray-200"
        aria-label="Decrease amount"
      >
        -
      </button>
      <input
        type="number"
        className="quantity-input w-12 py-2 md:py-3 bg-transparent text-primary-dark text-center focus:outline-none"
        aria-label="Item amount"
      />
      <button
        type="button"
        className="py-2 md:py-3 px-3 md:px-4 text-xl text-primary-dark bg-transparent hover:bg-gray-200"
        aria-label="Increase amount"
      >
        +
      </button>
    </div>
  );
}
export default ProductQuantityInput;
