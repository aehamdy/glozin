/* eslint-disable react/prop-types */
import CategoryCardSkeleton from "./CategoryCardSkeleton";
import ProductCardSkeleton from "./ProductCardSkeleton";

function SkeletonWrapper({ type = "product-skeleton" }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 h-fit gap-8 py-10 px-5">
      {Array.from({ length: 4 }).map((_, index) =>
        type === "category-skeleton" ? (
          <CategoryCardSkeleton key={index} />
        ) : (
          <ProductCardSkeleton key={index} />
        )
      )}
    </div>
  );
}

export default SkeletonWrapper;
