/* eslint-disable react/prop-types */
// import { useCart } from "../context/CartContext";
import AddToCartButton from "./AddToCartButton";
import ProductCardSideButtons from "./ProductCardSideButtons";

function ProductCardQuickButtons({ product, removeFromWishlist }) {
  return (
    <>
      <ProductCardSideButtons
        product={product}
        removeFromWishlist={removeFromWishlist}
      />
      <AddToCartButton variant="quickButton" product={product} />
    </>
  );
}
export default ProductCardQuickButtons;
