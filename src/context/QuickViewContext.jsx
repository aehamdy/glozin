/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from "react";
import ProductQuickView from "../components/ProductQuickView";

const QuickViewContext = createContext();

export const QuickViewProvider = ({ children }) => {
  const [quickViewProduct, setQuickViewProduct] = useState(null);

  const openQuickView = (product) => setQuickViewProduct(product);
  const closeQuickView = () => setQuickViewProduct(null);

  return (
    <QuickViewContext.Provider value={{ openQuickView }}>
      {children}

      {quickViewProduct && (
        <ProductQuickView product={quickViewProduct} onClose={closeQuickView} />
      )}
    </QuickViewContext.Provider>
  );
};

export const useQuickView = () => useContext(QuickViewContext);
