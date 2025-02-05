/* eslint-disable react/prop-types */
import AddToWishlistButton from "./AddToWishlistButton";
import ProductCardButton from "./ProductCardButton";

function ProductCardSideButtons({ product, removeFromWishlist }) {
  const handleRemoveFromWishlist = (productId) => {
    removeFromWishlist(productId);
  };
  const quickButtons = [
    { icon: "cart" },
    { icon: "wishlist" },
    { icon: "eye" },
  ];

  return (
    <div className="absolute flex flex-col gap-4 top-5 lg:top-7 end-2 lg:end-0 lg:translate-x-full group-hover:lg:-translate-x-4 lg:opacity-0 lg:group-hover:opacity-100 group-hover:z-50 transition-all duration-medium">
      <div className="relative flex flex-col gap-3">
        {quickButtons.map((button, index) =>
          button.icon === "wishlist" ? (
            removeFromWishlist ? (
              <ProductCardButton
                key={index}
                icon="close"
                onClickFunc={handleRemoveFromWishlist}
                productId={product.id}
              />
            ) : (
              <AddToWishlistButton key={index} productId={product.id} />
            )
          ) : (
            <ProductCardButton
              key={index}
              icon={button.icon}
              productId={product.id}
            />
          )
        )}
      </div>
    </div>
  );
}

export default ProductCardSideButtons;
