/* eslint-disable react/prop-types */
function CartProductsCount({ value }) {
  return (
    <h4 className="font-semibold text-xl text-heading-dark">
      Shopping Cart ({value ? value : 0})
    </h4>
  );
}
export default CartProductsCount;
