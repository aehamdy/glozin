/* eslint-disable react/prop-types */
import Icon from "./Icon";
import { useFetchSingleProduct } from "../hooks/useFetchSingleProduct";
import { useWishlist } from "../context/wishlistContext";
import { useEffect, useState } from "react";

function AddToWishlistButton({ productId }) {
  const { addToWishlist, wishlistProducts } = useWishlist();
  const { product, loading, error } = useFetchSingleProduct(productId);
  const [isInWishlist, setIsInWishlist] = useState(false);

  useEffect(() => {
    if (product) {
      const inWishlist = wishlistProducts.some(
        (product) => product.id === productId
      );
      setIsInWishlist(inWishlist);
    }
  }, [wishlistProducts, productId]);

  const handleAddToWishlist = () => {
    if (product) addToWishlist(product);
  };

  return (
    <div
      onClick={handleAddToWishlist}
      className={`absolute md:relative top-0 -translate-y-1/4 md:-translate-y-0 end-0 p-3 md:p-4  ${
        isInWishlist ? "bg-primary-dark" : "bg-primary-light"
      } hover:bg-secondary-dark border rounded-full cursor-pointer duration-medium`}
    >
      <Icon
        name="wishlist"
        size="18"
        className={`${
          isInWishlist ? "text-primary-light" : "text-secondary-dark"
        } group-hover:text-primary-light group-hover:fill-secondary-dark`}
      />
    </div>
  );
}
export default AddToWishlistButton;
