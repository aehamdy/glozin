/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useFetchSingleProduct } from "../hooks/useFetchSingleProduct";
import { useWishlist } from "../context/wishlistContext";
import { useEffect, useState } from "react";
import ProductCardButton from "./ProductCardButton";

function WishlistButton({ productId, variant, icon, tooltipValue }) {
  const { addToWishlist, removeFromWishlist, wishlistProducts } = useWishlist();
  const { product } = useFetchSingleProduct(productId);
  const [isInWishlist, setIsInWishlist] = useState(false);

  useEffect(() => {
    if (product) {
      const inWishlist = wishlistProducts.some(
        (product) => product.id === productId
      );
      setIsInWishlist(inWishlist);
    }
  }, [wishlistProducts, productId]);

  useEffect(() => {
    const inWishlist = wishlistProducts.some(
      (product) => product.id === productId
    );
    setIsInWishlist(inWishlist);
  }, []);

  const handleWishlistToggle = () => {
    if (product) {
      if (isInWishlist) {
        removeFromWishlist(productId);
      } else {
        addToWishlist(product);
      }
    }
  };

  return (
    <ProductCardButton
      icon={icon}
      onClickFun={handleWishlistToggle}
      isInWishlist={isInWishlist}
      variant={variant}
      tooltipValue={
        tooltipValue &&
        (isInWishlist ? "remove from wishlist" : "add to wishlist")
      }
    />
  );
}
export default WishlistButton;
