import ProductsWrapper from "./ProductsWrapper";
import useFetchCategoryProducts from "../hooks/useFetchCategoryProducts";
import { useParams } from "react-router-dom";
import SkeletonWrapper from "./SkeletonWrapper";

function CategoryProducts() {
  const { categoryName } = useParams();
  const [productList, isLoading, isError] =
    useFetchCategoryProducts(categoryName);

  const productsCategory = categoryName.startsWith("womens-")
    ? categoryName.replace("womens-", "")
    : categoryName;

  if (isLoading) return <SkeletonWrapper type="category-skeleton" />;

  if (isError) return <p className="text-black">Error: {isError}</p>;

  return (
    <section className="text-black pt-10">
      <div className="flex flex-col items-center gap-2">
        <h1 className="font-bold text-3xl text-secondary-dark">
          {productsCategory.toUpperCase()}
        </h1>
        <p className="uppercase font-extralight text-sm">
          enjoy exploring our latest {productsCategory} collection
        </p>
      </div>
      <ProductsWrapper products={productList} />
    </section>
  );
}
export default CategoryProducts;
