import ProductsWrapper from "../components/ProductsWrapper";
import SectionHeader from "../components/SectionHeader";
import SkeletonWrapper from "../components/SkeletonWrapper";
import useFetchAllProducts from "../hooks/useFetchAllProducts";

function Shop() {
  const [productList, isLoading, error] = useFetchAllProducts();

  if (error)
    return (
      <p className="font-semibold text-2xl text-red-600">
        Oops...Something went wrong!
      </p>
    );

  return (
    <section className="py-vertical-spacing px-horizontal-spacing">
      <SectionHeader heading="Shop" desc="Enjoy exploring all our products" />
      {isLoading && <SkeletonWrapper type="product-skeleton" />}
      <ProductsWrapper products={productList} />
    </section>
  );
}

export default Shop;
