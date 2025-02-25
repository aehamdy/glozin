import ProductsWrapper from "./ProductsWrapper";
import useFetchCategoryProducts from "../hooks/useFetchCategoryProducts";
import { useParams } from "react-router-dom";

function CategoryProducts() {
  const { categoryName } = useParams();
  const [productList, isLoading, isError] =
    useFetchCategoryProducts(categoryName);

  if (isLoading) return <p className="text-black">Loading...</p>;
  if (isError) return <p className="text-black">Error: {isError}</p>;

  return (
    <section className="text-black">
      <ProductsWrapper products={productList} />
    </section>
  );
}
export default CategoryProducts;
