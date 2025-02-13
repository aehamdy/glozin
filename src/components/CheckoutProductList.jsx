import { useCart } from "../context/CartContext";
import ProductCardInCheckout from "./ProductCardInCheckout";

function CheckoutProductList() {
  const { cartState, buyNowProduct } = useCart();
  const { cartList } = cartState;

  return (
    <div className="flex flex-col gap-3">
      {buyNowProduct ? (
        <ProductCardInCheckout product={buyNowProduct} />
      ) : (
        cartList?.map((product, index) => (
          <ProductCardInCheckout key={index} product={product} />
        ))
      )}
    </div>
  );
}
export default CheckoutProductList;
