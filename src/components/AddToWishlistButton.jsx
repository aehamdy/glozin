/* eslint-disable react/prop-types */
import Icon from "./Icon";
import { useFetchSingleProduct } from "../hooks/useFetchSingleProduct";
import { useWishlist } from "../context/wishlistContext";
import { useEffect, useState } from "react";
import Tooltip from "./Tooltip";

function AddToWishlistButton({ productId }) {
  const { addToWishlist, removeFromWishlist, wishlistProducts } = useWishlist();
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

  const handleWishlistToggle = () => {
    if (product) {
      addToWishlist(product);
      if (isInWishlist) {
        removeFromWishlist(productId);
      }
    }
  };

  return (
    <button
      onClick={handleWishlistToggle}
      className={`group absolute md:relative top-0 -translate-y-1/4 md:-translate-y-0 end-0 p-3 md:p-4  ${
        isInWishlist ? "bg-primary-dark" : "bg-primary-light"
      } hover:bg-secondary-dark border rounded-full cursor-pointer duration-medium`}
    >
      <Tooltip
        value={`${isInWishlist ? "Remove from wishlist" : "Add to wishlist"}`}
        className="hidden lg:block absolute -top-5 group-hover:-top-7 start-0 -translate-x-1/4 w-24 py-1 text-xs text-primary-light bg-primary-dark rounded-md opacity-0 group-hover:opacity-100 z-[-1] group-hover:z-40 pointer-events-none duration-300"
      />
      <Icon
        name="wishlist"
        size="18"
        className={`${
          isInWishlist ? "text-primary-light" : "text-secondary-dark"
        } group-hover:text-primary-light group-hover:fill-secondary-dark`}
      />
    </button>
  );
}
export default AddToWishlistButton;
