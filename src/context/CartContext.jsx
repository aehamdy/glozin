/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useState } from "react";
import calculateCartTotal from "../utils/calculateCartTotal";
const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);
  const [subtotal, setSubtotal] = useState(0);
  const [newSubtotal, setNewSubtotal] = useState(0);
  const cartTotal = calculateCartTotal(cartList);

  const addToCart = (product, prodQuantity) => {
    setCartList((prev) => {
      if (!prev?.some((prod) => prod.id === product.id)) {
        return [{ ...product, orderQuantity: prodQuantity || +1 }, ...prev];
      } else {
        return [...prev];
      }
    });
  };

  const removeFromCart = (product) => {
    setCartList((prev) => {
      return prev.filter((prod) => prod.id !== product.id);
    });
  };

  useEffect(() => {
    setSubtotal(cartTotal);
  }, [cartList]);

  return (
    <CartContext.Provider
      value={{
        cartList,
        setCartList,
        addToCart,
        removeFromCart,
        subtotal,
        setSubtotal,
        newSubtotal,
        setNewSubtotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
