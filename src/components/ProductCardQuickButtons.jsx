/* eslint-disable react/prop-types */
import { useCart } from "../context/CartContext";
import AddToCartButton from "./AddToCartButton";
import ProductCardSideButtons from "./ProductCardSideButtons";

function ProductCardQuickButtons({ product, removeFromWishlist }) {
  const { addToCart } = useCart();

  const handleClick = () => {
    addToCart(product);
  };

  return (
    <>
      <ProductCardSideButtons
        product={product}
        removeFromWishlist={removeFromWishlist}
      />
      <AddToCartButton handleClick={handleClick} variant="quickButton" />
    </>
  );
}
export default ProductCardQuickButtons;
