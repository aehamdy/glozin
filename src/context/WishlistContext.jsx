/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from "react";

const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
  const [wishlistProducts, setWishlistProducts] = useState([]);

  const addToWishlist = (product) => {
    setWishlistProducts((prev) => {
      if (!prev.some((p) => p.id === product.id)) {
        return [...prev, product];
      }
      return prev;
    });
  };

  const removeFromWishlist = (productId) => {
    setWishlistProducts((prev) =>
      prev.filter((product) => product.id !== productId)
    );
  };

  return (
    <WishlistContext.Provider
      value={{ wishlistProducts, addToWishlist, removeFromWishlist }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => useContext(WishlistContext);
