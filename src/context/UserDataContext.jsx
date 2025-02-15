/* eslint-disable react/prop-types */
import { createContext, useContext, useReducer } from "react";

const UserDataContext = createContext();

const initialState = {
  email: "",
  deliveryMethod: "",
  country: "",
  shippingFees: null,
  firstName: "",
  lastName: "",
  address: "",
  apartment: "",
  city: "",
  zipCode: "",
  isCouponUsed: false,
};

const userDataReducer = (state, action) => {};

export const UserDataProvider = ({ children }) => {
  const [userDataState, dispatchUserData] = useReducer(
    userDataReducer,
    initialState
  );
  return (
    <UserDataContext.Provider value={{}}>{children}</UserDataContext.Provider>
  );
};

export const useUserData = () => useContext(UserDataContext);
