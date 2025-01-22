import ProductInCart from "./ProductInCart";

/* eslint-disable react/prop-types */
function CartProductList({ cartList }) {
  return (
    <div className="flex flex-col h-[460px] overflow-y-auto">
      {cartList.map((product, index) => (
        <ProductInCart key={index} product={product} />
      ))}
    </div>
  );
}
export default CartProductList;
