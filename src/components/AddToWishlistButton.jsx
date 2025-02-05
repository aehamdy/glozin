/* eslint-disable react/prop-types */
import { useFetchSingleProduct } from "../hooks/useFetchSingleProduct";
import { useWishlist } from "../context/wishlistContext";
import { useEffect, useState } from "react";
import ProductCardButton from "./ProductCardButton";

function AddToWishlistButton({ productId, variant }) {
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
      icon="wishlist"
      onClickFunc={handleWishlistToggle}
      isInWishlist={isInWishlist}
      variant={variant}
    />
  );
}
export default AddToWishlistButton;
