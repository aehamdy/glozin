import { useEffect, useState } from "react";
import ProductsWrapper from "../components/ProductsWrapper";
import SectionHeader from "../components/SectionHeader";
import ProductsLoadingIndicator from "../components/ProductsLoadingIndicator";
import fetchData from "../utils/fetchData";
import endpoint from "../config/endpoint";

function Shop() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchData(endpoint.menShirts, setProducts);
  }, []);

  return (
    <section className="py-vertical-spacing px-horizontal-spacing">
      {console.log(products)}
      <SectionHeader heading="Shop" desc="Enjoy exploring all our products" />

      {Array.isArray(products) && products.length > 0 ? (
        <ProductsWrapper products={products} />
      ) : (
        <ProductsLoadingIndicator />
      )}
    </section>
  );
}

export default Shop;
