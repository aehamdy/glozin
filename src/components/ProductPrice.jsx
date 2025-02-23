/* eslint-disable react/prop-types */
function ProductPrice({ productPrice }) {
  return (
    <div className="prices flex items-center my-2 font-semibold text-2xl md:text-3xl">
      <span className="text-secondary-dark">${productPrice}</span>
    </div>
  );
}
export default ProductPrice;
