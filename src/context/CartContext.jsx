/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useReducer } from "react";
import {
  ADD_TO_CART,
  DECREASE_QUANTITY,
  INCREASE_QUANTITY,
  REMOVE_FROM_CART,
  RESET_CART,
  SET_BUY_NOW_PRODUCT,
} from "../constants/actionTypes";

const CartContext = createContext();

const initialState = {
  cartList: [],
  buyNowProduct: null,
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
          : p
      );
      return { ...state, cartList: updatedCartList };

    case SET_BUY_NOW_PRODUCT:
      return { ...state, buyNowProduct: action.payload };

    case RESET_CART:
      return { ...state, cartList: [], buyNowProduct: null };

    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [cartState, dispatchCart] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider
      value={{
        dispatchCart,
        cartState,
        cartList: cartState.cartList,
        buyNowProduct: cartState.buyNowProduct,
        buyNowProductPrice: cartState.buyNowProduct?.price,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
