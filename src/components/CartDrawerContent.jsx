/* eslint-disable react/prop-types */
import CartProductList from "./CartProductList";
import EmptyCart from "./EmptyCart";

function CartDrawerContent({ cartList, handleCloseCart }) {
  return (
    <div className="my-auto px-4">
      {cartList?.length >= 1 ? (
        <CartProductList cartList={cartList} />
      ) : (
        <EmptyCart handleCloseCart={handleCloseCart} />
      )}
    </div>
  );
}
export default CartDrawerContent;
