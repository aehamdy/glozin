import { useEffect, useState } from "react";
import ProductsWrapper from "../components/ProductsWrapper";
import fetchProducts from "../utils/fetchProducts";
import apiUrls from "../config/apiUrls";
import apiOptions from "../config/apiOptions";
import SectionHeader from "../components/SectionHeader";
import ProductsLoadingIndicator from "../components/ProductsLoadingIndicator";

function Shop() {
  const [products, setProducts] = useState([]);
  const url = apiUrls.women;

  useEffect(() => {
    async function getProducts() {
      try {
        const fetchedProducts = await fetchProducts(url, apiOptions);

        setProducts(fetchedProducts || []);
      } catch (error) {
        console.error("Error fetching products: ", error);

        setProducts([]);
      }
    }

    getProducts();
  }, [url]);

  return (
    <section className="py-vertical-spacing px-horizontal-spacing">
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
