/* eslint-disable react/prop-types */
function ProductDesc({ productDesc }) {
  return (
    <p className="text-sm md:text-[15px] text-start text-content-medium-dark leading-7">
      {productDesc}
    </p>
  );
}
export default ProductDesc;
