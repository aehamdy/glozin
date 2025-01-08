/* eslint-disable react/prop-types */
function ProductInventoryInfo({ sku, stock, minimumStock }) {
  return (
    <div className="product-details flex flex-col items-start gap-1 text-sm md:text-base text-content-medium-dark text-start">
      <div className="flex">
        <div className="w-[90px]">SKU:</div>
        <span>{sku || "N/A"}</span>
      </div>

      <div className="flex">
        <div className="w-[90px]">Available: </div>
        <div>
          <span
            className={`${
              stock > minimumStock
                ? "text-emerald-500"
                : stock <= minimumStock
                ? "text-gray-500"
                : "text-red-500"
            }`}
          >
            {stock > 5
              ? "In Stock"
              : stock <= minimumStock && stock >= 1
              ? "Low Stock"
              : "Out of Stock"}
          </span>
        </div>
      </div>
    </div>
  );
}
export default ProductInventoryInfo;
