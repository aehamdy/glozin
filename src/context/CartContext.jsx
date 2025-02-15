/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useReducer, useState } from "react";
import {
  ADD_TO_CART,
  DECREASE_QUANTITY,
  INCREASE_QUANTITY,
  REMOVE_FROM_CART,
} from "../constants/actionTypes";

const CartContext = createContext();

const initialState = {
  cartList: [],
};

const cartReducer = (state, action) => {
  let updatedCartList;

  switch (action.type) {
    case ADD_TO_CART:
      updatedCartList = state.cartList?.some((p) => action.payload.id === p.id)
        ? state.cartList
        : [
            {
              ...action.payload,
              orderQuantity: action.payload.orderQuantity || 1,
            },
            ...state.cartList,
          ];
      return { ...state, cartList: updatedCartList };

    case REMOVE_FROM_CART:
      updatedCartList = state.cartList.filter(
        (p) => p.id !== action.payload.id
      );
      return { ...state, cartList: updatedCartList };

    case INCREASE_QUANTITY:
      updatedCartList = state.cartList.map((p) =>
        p.id === action.payload.id
          ? { ...p, orderQuantity: p.orderQuantity + 1 }
          : p
      );
      return { ...state, cartList: updatedCartList };

    case DECREASE_QUANTITY:
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
  const [cartState, dispatchCart] = useReducer(cartReducer, initialState);
  const [buyNowProduct, setBuyNowProduct] = useState(null);

  return (
    <CartContext.Provider
      value={{
        dispatchCart,
        cartState,
        cartList: cartState.cartList,
        buyNowProduct,
        setBuyNowProduct,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
