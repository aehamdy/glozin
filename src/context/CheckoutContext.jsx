/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useReducer } from "react";
import {
  SET_BUY_NOW_PRODUCT_PRICE,
  SET_COUPON_CODE_AVAILABILITY,
  SET_COUPON_ERROR_MESSAGE,
  SET_DISCOUNT_AMOUNT,
  SET_DISCOUNTED_SHIPPING_FEES,
  SET_DISCOUNTED_SUBTOTAL,
  SET_ENTERED_COUPON_CODE,
  SET_FREE_SHIPPING,
  SET_SHIPPING_FEES,
  SET_SUBTOTAL,
  SET_TOTAL,
  SET_USED_COUPON_CODE,
} from "../constants/actionTypes";
import { useCart } from "./CartContext";
import calculateCartTotal from "../utils/calculateCartTotal";
import FREE_SHIPPING_THRESHOLD from "../config/freeShippingThreshold";

const CheckoutContext = createContext();

const initialState = {
  subtotal: 0,
  discountedSubtotal: 0,
  total: 0,
  buyNowProductPrice: null,
  shippingFees: null,
  isEligibleForFreeShipping: false,
  discountedShippingFees: null,
  isCouponCodeAvailable: "",
  enteredCouponCode: "",
  usedCouponCode: "",
  discountAmount: 0,
  couponErrorMessage: "",
};

const checkoutReducer = (state, action) => {
  switch (action.type) {
    case SET_SUBTOTAL:
      return {
        ...state,
        subtotal: calculateCartTotal(action.payload),
      };

    case SET_DISCOUNTED_SUBTOTAL:
      return { ...state, discountedSubtotal: action.payload };

    case SET_TOTAL:
      return { ...state, total: action.payload };

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

    case SET_COUPON_CODE_AVAILABILITY:
      return { ...state, isCouponCodeAvailable: action.payload };

    case SET_ENTERED_COUPON_CODE:
      return { ...state, enteredCouponCode: action.payload };

    case SET_USED_COUPON_CODE:
      return { ...state, usedCouponCode: action.payload };

    case SET_COUPON_ERROR_MESSAGE:
      return { ...state, couponErrorMessage: action.payload };

    case SET_DISCOUNT_AMOUNT:
      return { ...state, discountAmount: action.payload };

    default:
      return state;
  }
};

export const CheckoutProvider = ({ children }) => {
  const [checkoutState, dispatchCheckout] = useReducer(
    checkoutReducer,
    initialState
  );
  const { cartList, buyNowProduct, buyNowProductPrice } = useCart();
  const couponCodeFieldErrorMessage = "Enter a valid coupon code";

  // set subtotal when cartlist has more than one item
  useEffect(() => {
    if (cartList.length > 0) {
      dispatchCheckout({
        type: SET_SUBTOTAL,
        payload: cartList,
      });
    }
  }, [cartList]);

  // Adjust free shipping eligibility acorrding to subtotal amount
  useEffect(() => {
    if (checkoutState.subtotal >= FREE_SHIPPING_THRESHOLD) {
      dispatchCheckout({ type: SET_FREE_SHIPPING, payload: true });
      dispatchCheckout({ type: SET_DISCOUNTED_SHIPPING_FEES, payload: 0 });
    } else {
      dispatchCheckout({ type: SET_FREE_SHIPPING, payload: false });
      dispatchCheckout({ type: SET_DISCOUNTED_SHIPPING_FEES, payload: null });
    }
  }, [checkoutState.subtotal]);

  //
  useEffect(() => {
    if (
      !checkoutState.isEligibleForFreeShipping &&
      checkoutState.discountedShippingFees === null
    ) {
      dispatchCheckout({
        type: SET_TOTAL,
        payload: checkoutState.shippingFees
          ? +checkoutState.shippingFees + +checkoutState.subtotal
          : +checkoutState.subtotal,
      });
    } else if (
      checkoutState.isEligibleForFreeShipping &&
      checkoutState.discountedShippingFees >= 0
    ) {
      dispatchCheckout({
        type: SET_TOTAL,
        payload:
          checkoutState.discountedShippingFees > 0
            ? checkoutState.subtotal + checkoutState.discountedShippingFees
            : checkoutState.subtotal,
      });
    }
  }, [
    checkoutState.subtotal,
    checkoutState.shippingFees,
    checkoutState.isEligibleForFreeShipping,
    checkoutState.discountedShippingFees,
  ]);

  // Adjust total calculations depending on buy now product existance
  useEffect(() => {
    if (buyNowProduct) {
      dispatchCheckout({
        type: SET_BUY_NOW_PRODUCT_PRICE,
        payload: buyNowProduct.price,
      });
      dispatchCheckout({
        type: SET_TOTAL,
        payload: buyNowProduct.price + checkoutState.shippingFees,
      });
    } else {
      dispatchCheckout({
        type: SET_TOTAL,
        payload: checkoutState.subtotal + checkoutState.shippingFees,
      });
    }
  }, [buyNowProduct]);

  // Adjust total calculations depending on shipping fees
  useEffect(() => {
    if (checkoutState.shippingFees) {
      dispatchCheckout({
        type: SET_TOTAL,
        payload:
          (buyNowProductPrice ? buyNowProductPrice : +checkoutState.subtotal) +
          (checkoutState.discountedShippingFees !== null
            ? +checkoutState.discountedShippingFees
            : +checkoutState.shippingFees),
      });
    }
  }, [checkoutState.shippingFees]);

  // Adjust discount according to entered discount code
  useEffect(() => {
    if (checkoutState.isCouponCodeAvailable) {
      dispatchCheckout({ type: SET_COUPON_ERROR_MESSAGE, payload: "" });

      if (
        checkoutState.usedCouponCode &&
        checkoutState.usedCouponCode?.label.toLowerCase() === "free shipping"
      ) {
        dispatchCheckout({ type: SET_DISCOUNTED_SHIPPING_FEES, payload: 0 });
        dispatchCheckout({
          type: SET_TOTAL,
          payload:
            +checkoutState.subtotal + checkoutState.discountedShippingFees,
        });
      } else if (checkoutState.usedCouponCode) {
        dispatchCheckout({
          type: SET_DISCOUNT_AMOUNT,
          payload: checkoutState.usedCouponCode.discountAmount,
        });

        const newDiscountedSubtotal =
          +checkoutState.subtotal * (+checkoutState.discountAmount / 100);
        const discountedSubtotal = +newDiscountedSubtotal.toFixed(2);

        dispatchCheckout({
          type: SET_DISCOUNTED_SUBTOTAL,
          payload: discountedSubtotal,
        });
        dispatchCheckout({
          type: SET_TOTAL,
          payload: discountedSubtotal + +checkoutState.shippingFees, // Use the newly calculated value
        });
      }
    } else if (checkoutState.isCouponCodeAvailable === false) {
      dispatchCheckout({ type: SET_DISCOUNT_AMOUNT, payload: null });
      dispatchCheckout({ type: SET_DISCOUNTED_SHIPPING_FEES, payload: null });
      dispatchCheckout({ type: SET_USED_COUPON_CODE, payload: "" });
      dispatchCheckout({
        type: SET_COUPON_ERROR_MESSAGE,
        payload: couponCodeFieldErrorMessage,
      });
    }
  }, [checkoutState.isCouponCodeAvailable]);

  return (
    <CheckoutContext.Provider
      value={{
        dispatchCheckout,
        checkoutState,
        subtotal: checkoutState.subtotal,
        discountedSubtotal: checkoutState.discountedSubtotal,
        total: checkoutState.total,
        buyNowProductPrice: checkoutState.buyNowProductPrice,
        shippingFees: checkoutState.shippingFees,
        isEligibleForFreeShipping: checkoutState.isEligibleForFreeShipping,
        discountedShippingFees: checkoutState.discountedShippingFees,
        isCouponCodeAvailable: checkoutState.isCouponCodeAvailable,
        enteredCouponCode: checkoutState.enteredCouponCode,
        usedCouponCode: checkoutState.usedCouponCode,
        discountAmount: checkoutState.discountAmount,
        couponErrorMessage: checkoutState.couponErrorMessage,
      }}
    >
      {children}
    </CheckoutContext.Provider>
  );
};

export const useCheckout = () => useContext(CheckoutContext);
