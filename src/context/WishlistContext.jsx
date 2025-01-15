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

  return (
    <WishlistContext.Provider value={{ wishlistProducts, addToWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => useContext(WishlistContext);
