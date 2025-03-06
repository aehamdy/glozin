/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useCallback, useContext, useState } from "react";
import ToastNotification from "../components/ToastNotification";

const ToastContext = createContext();

export const ToastProvider = ({ children }) => {
  const [toast, setToast] = useState(false);

  const showToast = useCallback((message, type = "cart") => {
    setToast({ message, type });
    setTimeout(() => setToast(false), 3000);
  }, []);

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      {toast && <ToastNotification {...toast} onClose={() => setToast(null)} />}
    </ToastContext.Provider>
  );
};

export const useToast = () => useContext(ToastContext);
