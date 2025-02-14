/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useReducer } from "react";
import {
  SET_DISCOUNTED_SUBTOTAL,
  SET_DISCOUNTED_TOTAL,
  SET_SUBTOTAL,
  SET_TOTAL,
} from "../constants/actionTypes";
import { useCart } from "./CartContext";
import calculateCartTotal from "../utils/calculateCartTotal";

const CheckoutContext = createContext();

const initialState = {
  subtotal: 0,
  discountedSubtotal: 0,
  total: 0,
  discountedTotal: 0,
};

const checkoutReducer = (state, action) => {
  switch (action.type) {
    case SET_SUBTOTAL:
      return { ...state, subtotal: calculateCartTotal(action.payload) };
    case SET_DISCOUNTED_SUBTOTAL:
      return null;
    case SET_TOTAL:
      return null;
    case SET_DISCOUNTED_TOTAL:
      return null;

    default:
      return state;
  }
};

export const CheckoutProvider = ({ children }) => {
  const [checkoutState, dispatchCheckout] = useReducer(
    checkoutReducer,
    initialState
  );
  const { cartState } = useCart();
  const { cartList } = cartState;

  useEffect(() => {
    if (cartList.length > 0) {
      dispatchCheckout({
        type: SET_SUBTOTAL,
        payload: cartList,
      });
    }
  }, [cartList]);

  return (
    <CheckoutContext.Provider
      value={{
        dispatchCheckout,
        checkoutState,
        subtotal: checkoutState.subtotal,
        discountedSubtotal: checkoutState.discountedSubtotal,
        total: checkoutState.total,
        discountedTotal: checkoutState.discountTotal,
      }}
    >
      {children}
    </CheckoutContext.Provider>
  );
};

export const useCheckout = () => useContext(CheckoutContext);
