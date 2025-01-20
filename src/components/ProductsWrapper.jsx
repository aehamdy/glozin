/* eslint-disable react/prop-types */
import ProductCard from "./ProductCard";

function ProductsWrapper({ products }) {
  return (
    <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-14 gap-x-6 mt-8">
      {products.map((product, index) => {
        const salePrice =
          product.sale - (product.sale * product.discountPercentage) / 100;
        return (
          <ProductCard key={index} product={product} salePrice={salePrice} />
        );
      })}
    </section>
  );
}
export default ProductsWrapper;
