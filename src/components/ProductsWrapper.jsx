/* eslint-disable react/prop-types */
import ProductCard from "./ProductCard";

function ProductsWrapper({ products }) {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-14 gap-x-6 mt-8">
      {products.map((product, index) => (
        <ProductCard key={index} product={product} />
      ))}
    </section>
  );
}
export default ProductsWrapper;
