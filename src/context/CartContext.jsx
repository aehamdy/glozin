/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  <CartContext.Provider value="">{children}</CartContext.Provider>;
};

export const useCart = () => useContext(CartContext);
