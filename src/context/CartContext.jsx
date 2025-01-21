/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);

  const addToCart = (product) => {
    setCartList((prev) => {
      if (!prev.some((prod) => prod.id === product.id)) {
        return [product, ...prev];
      } else {
        return;
      }
    });
  };

  return (
    <CartContext.Provider value={{ cartList, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
