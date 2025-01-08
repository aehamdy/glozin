/* eslint-disable react/prop-types */
function ProductPrice({ productPrice, productDiscountPercentage }) {
  return (
    <div className="prices flex items-center my-2 font-semibold text-2xl md:text-3xl">
      {productDiscountPercentage < 10 && (
        <span className="me-3 text-xl md:text-2xl lg:text-[26px] text-price-salePrice">
          {productDiscountPercentage < 10 &&
            `$${Math.ceil(
              (
                (productPrice * (productPrice - productDiscountPercentage)) /
                100
              ).toFixed(2)
            )}.00`}
        </span>
      )}
      <span
        className={`${
          productDiscountPercentage < 10
            ? "font-extralight text-lg md:text-xl text-price-originalPrice line-through"
            : "text-secondary-dark"
        }`}
      >
        ${productPrice}
      </span>
    </div>
  );
}
export default ProductPrice;
