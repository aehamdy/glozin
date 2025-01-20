/* eslint-disable react/prop-types */
import AddToWishlistButton from "./AddToWishlistButton";
import ProductCardButton from "./ProductCardButton";

function ProductCardSideButtons({ productId, removeFromWishlist }) {
  const handleRemoveFromWishlist = (productId) => {
    removeFromWishlist(productId);
  };
  const quickButtons = [{ icon: "wishlist" }, { icon: "eye" }];

  return (
    <div className="absolute top-5 end-5 lg:-end-2 group-hover:end-5 flex flex-col gap-4 lg:opacity-0 lg:group-hover:opacity-100 group-hover:z-50 transition-all duration-medium">
      <div className="relative flex flex-col gap-3">
        {quickButtons.map((button, index) =>
          button.icon === "wishlist" ? (
            removeFromWishlist ? (
              <ProductCardButton
                key={index}
                icon="close"
                onClickFunc={handleRemoveFromWishlist}
                productId={productId}
              />
            ) : (
              <AddToWishlistButton key={index} productId={productId} />
            )
          ) : (
            <ProductCardButton key={index} icon={button.icon} />
          )
        )}
      </div>
    </div>
  );
}
export default ProductCardSideButtons;
