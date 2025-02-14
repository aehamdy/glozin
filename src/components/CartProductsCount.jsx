import { useCart } from "../context/CartContext";

function CartProductsCount() {
  const {
    cartState: { cartList },
  } = useCart();

  return (
    <h4 className="font-semibold text-xl text-heading-dark">
      Shopping Cart ({cartList.length})
    </h4>
  );
}
export default CartProductsCount;
