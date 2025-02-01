/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);
  const [subtotal, setSubtotal] = useState(0);

  const addToCart = (product) => {
    setCartList((prev) => {
      if (!prev?.some((prod) => prod.id === product.id)) {
        return [{ ...product, orderQuantity: +1 }, ...prev];
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
    setSubtotal(cartList?.reduce((acc, curr) => acc + curr.price, 0));
  }, [cartList]);

  return (
    <CartContext.Provider
      value={{ cartList, setCartList, addToCart, removeFromCart, subtotal }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
