/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext } from "react";

const CheckoutContext = createContext();

export const CheckoutProvider = ({ children }) => {
  return (
    <CheckoutContext.Provider value={{}}>{children}</CheckoutContext.Provider>
  );
};

export const useCheckout = () => useContext(CheckoutContext);
