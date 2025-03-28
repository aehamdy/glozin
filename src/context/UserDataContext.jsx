/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useReducer } from "react";
import {
  SET_ADDRESS,
  SET_APARTMENT,
  SET_CITY,
  SET_COUNTRY,
  SET_DELIVERY_METHOD,
  SET_EMAIL,
  SET_FIRST_NAME,
  SET_IS_USER_DATA_VALID,
  SET_LAST_NAME,
  SET_SHIPPING_COST,
  SET_SHIPPING_FEES,
  SET_ZIP_CODE,
} from "../constants/actionTypes";
import { useCheckout } from "./CheckoutContext";

const UserDataContext = createContext();

const initialState = {
  email: "",
  deliveryMethod: "",
  country: "",
  firstName: "",
  lastName: "",
  address: "",
  apartment: "",
  city: "",
  zipCode: "",
  shippingCost: null,
  isCouponUsed: false,
  isUserDataValid: false,
};

const userDataReducer = (state, action) => {
  switch (action.type) {
    case SET_EMAIL:
      return { ...state, email: action.payload };

    case SET_DELIVERY_METHOD:
      return { ...state, deliveryMethod: action.payload };

    case SET_COUNTRY:
      return { ...state, country: action.payload };

    case SET_FIRST_NAME:
      return { ...state, firstName: action.payload };

    case SET_LAST_NAME:
      return { ...state, lastName: action.payload };

    case SET_ADDRESS:
      return { ...state, address: action.payload };

    case SET_APARTMENT:
      return { ...state, apartment: action.payload };

    case SET_CITY:
      return { ...state, city: action.payload };

    case SET_ZIP_CODE:
      return { ...state, zipCode: action.payload };

    case SET_SHIPPING_COST:
      return { ...state, shippingCost: action.payload };

    case SET_IS_USER_DATA_VALID:
      return { ...state, isUserDataValid: action.payload };

    default:
      return state;
  }
};

export const UserDataProvider = ({ children }) => {
  const [userDataState, dispatchUserData] = useReducer(
    userDataReducer,
    initialState
  );
  const { dispatchCheckout } = useCheckout();

  useEffect(() => {
    if (userDataState.shippingCost) {
      dispatchCheckout({
        type: SET_SHIPPING_FEES,
        payload: userDataState.shippingCost,
      });
    }
  }, [userDataState.shippingCost]);

  useEffect(() => {
    const isValid = Object.values({
      email: userDataState.email,
      deliveryMethod: userDataState.deliveryMethod,
      country: userDataState.country,
      firstName: userDataState.firstName,
      lastName: userDataState.lastName,
      address: userDataState.address,
      apartment: userDataState.apartment,
      city: userDataState.city,
      zipCode: userDataState.zipCode,
      shippingCost: userDataState.shippingCost,
    }).every(Boolean);

    if (userDataState.isUserDataValid !== isValid) {
      dispatchUserData({ type: SET_IS_USER_DATA_VALID, payload: isValid });
    }
  }, [userDataState]);

  return (
    <UserDataContext.Provider
      value={{
        dispatchUserData,
        emailValue: userDataState.email,
        deliveryMethodValue: userDataState.deliveryMethod,
        countryValue: userDataState.country,
        firstNameValue: userDataState.firstName,
        lastNameValue: userDataState.lastName,
        addressValue: userDataState.address,
        apartmentValue: userDataState.apartment,
        cityValue: userDataState.city,
        zipCodeValue: userDataState.zipCode,
        shippingCost: userDataState.shippingCost,
        isUserDataValid: userDataState.isUserDataValid,
      }}
    >
      {children}
    </UserDataContext.Provider>
  );
};

export const useUserData = () => useContext(UserDataContext);
