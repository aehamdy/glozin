import { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";
import fetchProducts from "../utils/fetchProducts";

function Shop() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="py-vertical-spacing px-horizontal-spacing">
      <div className="flex flex-col items-center">
        <h2 className="font-semibold text-secondary-dark text-3xl">Products</h2>
        <p className="text-content-medium-dark text-center">
          Enjoy exploring all our products
        </p>
      </div>

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-14 gap-x-6 mt-8">
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </section>
    </div>
  );
}

export default Shop;
