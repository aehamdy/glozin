/* eslint-disable react/prop-types */
import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import calculateCartTotal from "../utils/calculateCartTotal";

const CartContext = createContext();

const initialState = {
  cartList: [],
};

const reducer = (state, action) => {
  let updatedCartList;
  switch (action.type) {
    case "addToCart":
      updatedCartList = state.cartList.some((p) => action.payload.id === p.id)
        ? { ...state, cartList: [...state.cartList] }
        : { ...state, cartList: [action.payload, ...state.cartList] };
      return updatedCartList;
  }
};

export const CartProvider = ({ children }) => {
  const [cartState, dispatchCart] = useReducer(reducer, initialState);
  const [cartList, setCartList] = useState([]);
  const [subtotal, setSubtotal] = useState(0);
  const [newSubtotal, setNewSubtotal] = useState(0);
  const [buyNowProduct, setBuyNowProduct] = useState(null);
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
        buyNowProduct,
        setBuyNowProduct,
        dispatchCart,
        cartState,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
