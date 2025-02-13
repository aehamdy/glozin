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
      updatedCartList = state.cartList?.some((p) => action.payload.id === p.id)
        ? state.cartList
        : [{ ...action.payload, orderQuantity: 1 }, ...state.cartList];
      return { ...state, cartList: updatedCartList };

    case "removeFromCart":
      updatedCartList = state.cartList.filter(
        (p) => p.id !== action.payload.id
      );
      return { ...state, cartList: updatedCartList };

    case "increaseQuantity":
      updatedCartList = state.cartList.map((p) =>
        p.id === action.payload.id
          ? { ...p, orderQuantity: p.orderQuantity + 1 }
          : { p }
      );
      return { ...state, cartList: updatedCartList };

    case "decreaseQuantity":
      updatedCartList = state.cartList.map((p) =>
        p.id === action.payload.id && p.orderQuantity > 1
          ? { ...p, orderQuantity: p.orderQuantity - 1 }
          : { ...p, orderQuantity: 1 }
      );
      return { ...state, cartList: updatedCartList };

    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [cartState, dispatchCart] = useReducer(reducer, initialState);
  const [cartList, setCartList] = useState([]);
  const [subtotal, setSubtotal] = useState(0);
  const [newSubtotal, setNewSubtotal] = useState(0);
  const [buyNowProduct, setBuyNowProduct] = useState(null);
  const cartTotal = calculateCartTotal(cartState.cartList);

  useEffect(() => {
    setSubtotal(cartTotal);
  }, [cartState.cartList]);

  return (
    <CartContext.Provider
      value={{
        cartList,
        setCartList,
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
