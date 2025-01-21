/* eslint-disable react/prop-types */
import { useCart } from "../context/CartContext";
import Button from "./Button";
import ProductCardSideButtons from "./ProductCardSideButtons";

function ProductCardQuickButtons({ product, removeFromWishlist }) {
  const { addToCart } = useCart();

  const handleClick = () => {
    addToCart(product);
  };

  return (
    <>
      <ProductCardSideButtons
        productId={product.id}
        removeFromWishlist={removeFromWishlist}
      />
      <Button
        handleClick={handleClick}
        value="Add to Cart"
        className="hidden lg:block absolute bottom-[20%] group-hover:bottom-[23%] start-1/2 -translate-x-1/2 w-3/5 py-2 text-lg text-primary-light bg-secondary-dark hover:bg-red-500 rounded-medium opacity-0 group-hover:opacity-100 group-hover:z-[80] transition-all ease-in-out duration-medium"
      />
    </>
  );
}
export default ProductCardQuickButtons;
