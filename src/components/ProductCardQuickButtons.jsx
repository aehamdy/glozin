/* eslint-disable react/prop-types */
import Button from "./Button";
import ProductCardSideButtons from "./ProductCardSideButtons";

function ProductCardQuickButtons({
  productId,
  handleRemoveFromWishlist,
  removeFromWishlist,
}) {
  return (
    <>
      <ProductCardSideButtons
        productId={productId}
        handleRemoveFromWishlist={handleRemoveFromWishlist}
        removeFromWishlist={removeFromWishlist}
      />
      <Button
        value="Add to Cart"
        className="hidden lg:block absolute bottom-[20%] group-hover:bottom-[23%] start-1/2 -translate-x-1/2 w-3/5 py-2 text-lg text-primary-light bg-secondary-dark hover:bg-primary-dark rounded-medium opacity-0 group-hover:opacity-100 group-hover:z-50 transition-all ease-in-out duration-medium"
      />
    </>
  );
}
export default ProductCardQuickButtons;
