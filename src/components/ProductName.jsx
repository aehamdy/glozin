/* eslint-disable react/prop-types */
function ProductName({ productName }) {
  return (
    <h1 className="font-semibold text-xl md:text-2xl lg:text-[26px] text-secondary-dark tracking-tight">
      {productName}
    </h1>
  );
}
export default ProductName;
