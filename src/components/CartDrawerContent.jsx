/* eslint-disable react/prop-types */
import { useCart } from "../context/CartContext";
import CartProductList from "./CartProductList";
import EmptyCart from "./EmptyCart";

function CartDrawerContent({ handleCloseCart }) {
  const { cartState } = useCart();
  const { cartList } = cartState;

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
