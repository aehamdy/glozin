import { useEffect, useState } from "react";
import ProductsWrapper from "../components/ProductsWrapper";
import fetchProducts from "../utils/fetchProducts";
import apiUrls from "../config/apiUrls";
import apiOptions from "../config/apiOptions";

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
      <div className="flex flex-col items-center">
        <h2 className="font-semibold text-secondary-dark text-3xl">Products</h2>
        <p className="text-content-medium-dark text-center">
          Enjoy exploring all our products
        </p>
      </div>

      {Array.isArray(products) && products.length > 0 ? (
        <ProductsWrapper products={products} />
      ) : (
        <div>Loading products...</div>
      )}
    </section>
  );
}

export default Shop;
