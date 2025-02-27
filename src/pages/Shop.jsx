import ProductsWrapper from "../components/ProductsWrapper";
import SectionHeader from "../components/SectionHeader";
import useFetchAllProducts from "../hooks/useFetchAllProducts";

function Shop() {
  const [productList, isLoading, error] = useFetchAllProducts();

  if (isLoading)
    return (
      <p className="font-bold text-3xl text-black">Fetching Products...</p>
    );
  if (error)
    return (
      <p className="font-semibold text-2xl text-red-600">
        Oops...Something went wrong!
      </p>
    );

  return (
    <section className="py-vertical-spacing px-horizontal-spacing">
      <SectionHeader heading="Shop" desc="Enjoy exploring all our products" />
      <ProductsWrapper products={productList} />
    </section>
  );
}

export default Shop;
