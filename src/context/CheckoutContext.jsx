/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useReducer } from "react";
import {
  SET_BUY_NOW_PRODUCT_PRICE,
  SET_DISCOUNTED_SHIPPING_FEES,
  SET_DISCOUNTED_SUBTOTAL,
  SET_DISCOUNTED_TOTAL,
  SET_FREE_SHIPPING,
  SET_SHIPPING_FEES,
  SET_SUBTOTAL,
  SET_TOTAL,
} from "../constants/actionTypes";
import { useCart } from "./CartContext";
import calculateCartTotal from "../utils/calculateCartTotal";
import FREE_SHIPPING_THRESHOLD from "../config/freeShippingThreshold";

const CheckoutContext = createContext();

const initialState = {
  subtotal: 0,
  discountedSubtotal: 0,
  total: 0,
  discountedTotal: 0,
  buyNowProductPrice: null,
  shippingFees: null,
  isEligibleForFreeShipping: false,
  discountedShippingFees: null,
};

const checkoutReducer = (state, action) => {
  switch (action.type) {
    case SET_SUBTOTAL:
      return { ...state, subtotal: calculateCartTotal(action.payload) };

    case SET_DISCOUNTED_SUBTOTAL:
      return null;

    case SET_TOTAL:
      return { ...state, total: action.payload };

    case SET_DISCOUNTED_TOTAL:
      return null;

    case SET_BUY_NOW_PRODUCT_PRICE:
      return { ...state, buyNowProductPrice: action.payload };

    case SET_SHIPPING_FEES:
      return {
        ...state,
        shippingFees: +action.payload,
      };

    case SET_FREE_SHIPPING:
      return { ...state, isEligibleForFreeShipping: action.payload };

    case SET_DISCOUNTED_SHIPPING_FEES:
      return { ...state, discountedShippingFees: action.payload };

    default:
      return state;
  }
};

export const CheckoutProvider = ({ children }) => {
  const [checkoutState, dispatchCheckout] = useReducer(
    checkoutReducer,
    initialState
  );
  const { cartList, buyNowProduct } = useCart();

  useEffect(() => {
    if (cartList.length > 0) {
      dispatchCheckout({
        type: SET_SUBTOTAL,
        payload: cartList,
      });
    }
  }, [cartList]);

  useEffect(() => {
    if (
      !checkoutState.isEligibleForFreeShipping &&
      checkoutState.discountedShippingFees === null
    ) {
      dispatchCheckout({
        type: SET_TOTAL,
        payload: checkoutState.subtotal + checkoutState.shippingFees,
      });
    } else if (
      checkoutState.isEligibleForFreeShipping &&
      checkoutState.discountedShippingFees === 0
    ) {
      dispatchCheckout({
        type: SET_TOTAL,
        payload: checkoutState.subtotal + checkoutState.discountedShippingFees,
      });
    }
  }, [
    checkoutState.subtotal,
    checkoutState.shippingFees,
    checkoutState.isEligibleForFreeShipping,
    checkoutState.discountedShippingFees,
  ]);

  useEffect(() => {
    if (checkoutState.subtotal >= FREE_SHIPPING_THRESHOLD) {
      dispatchCheckout({ type: SET_FREE_SHIPPING, payload: true });
      dispatchCheckout({ type: SET_DISCOUNTED_SHIPPING_FEES, payload: 0 });
    } else {
      dispatchCheckout({ type: SET_FREE_SHIPPING, payload: false });
      dispatchCheckout({ type: SET_DISCOUNTED_SHIPPING_FEES, payload: null });
    }
  }, [checkoutState.subtotal]);

  useEffect(() => {
    if (buyNowProduct) {
      dispatchCheckout({
        type: SET_BUY_NOW_PRODUCT_PRICE,
        payload: buyNowProduct.price,
      });
    }
  }, [buyNowProduct]);

  return (
    <CheckoutContext.Provider
      value={{
        dispatchCheckout,
        checkoutState,
        subtotal: checkoutState.subtotal,
        discountedSubtotal: checkoutState.discountedSubtotal,
        total: checkoutState.total,
        discountedTotal: checkoutState.discountTotal,
        shippingFees: checkoutState.shippingFees,
        isEligibleForFreeShipping: checkoutState.isEligibleForFreeShipping,
        discountedShippingFees: checkoutState.discountedShippingFees,
      }}
    >
      {children}
    </CheckoutContext.Provider>
  );
};

export const useCheckout = () => useContext(CheckoutContext);
