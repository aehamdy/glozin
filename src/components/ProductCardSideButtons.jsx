/* eslint-disable react/prop-types */
import WishlistButton from "./WishlistButton";
import ProductCardButton from "./ProductCardButton";

function ProductCardSideButtons({ product, removeFromWishlist }) {
  const quickButtons = [
    { icon: "cart", tooltipValue: "add to cart" },
    { icon: "wishlist", tooltipValue: "add to wishlist" },
    { icon: "eye", tooltipValue: "quick view" },
  ];

  return (
    <div className="absolute flex flex-col gap-4 top-5 lg:top-7 end-2 lg:end-0 lg:translate-x-full group-hover:lg:-translate-x-4 lg:opacity-0 lg:group-hover:opacity-100 group-hover:z-50 z-50 lg:z-0 transition-all duration-medium">
      <div className="relative flex flex-col gap-3">
        {quickButtons.map((button, index) =>
          button.icon === "wishlist" ? (
            removeFromWishlist ? (
              <WishlistButton
                key={index}
                productId={product.id}
                icon="close"
                tooltipValue="remove from wishlist"
              />
            ) : (
              <WishlistButton
                key={index}
                productId={product.id}
                icon="wishlist"
                tooltipValue="add to wishlist"
              />
            )
          ) : (
            <ProductCardButton
              key={index}
              icon={button.icon}
              productId={product.id}
              tooltipValue={button.tooltipValue}
              product={product}
              // onClickFunc={
              //   button.icon === "cart"
              //     ? () => dispatchCart({ type: ADD_TO_CART, payload: product })
              //     : button.icon === "eye"
              //     ? () => console.log(product)
              //     : undefined
              // }
            />
          )
        )}
      </div>
    </div>
  );
}

export default ProductCardSideButtons;
