/* eslint-disable react/prop-types */
import ProductCard from "./ProductCard";

function ProductsWrapper({ products }) {
  return (
    <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-14 gap-x-6 mt-8">
      {products.map((product, index) => {
        return <ProductCard key={index} product={product} />;
      })}
    </section>
  );
}
export default ProductsWrapper;
