/* eslint-disable react/prop-types */
import categories from "../data/categories";
import CategoryCard from "./CategoryCard";

function CategoriesWrapper({ variant }) {
  const displayedCategories = variant ? categories.slice(0, 6) : categories;

  return (
    <ul
      className={`grid grid-cols-2 ${
        variant
          ? "md:grid-cols-4 lg:grid-cols-6"
          : "md:grid-cols-3 lg:grid-cols-4"
      } gap-10 md:gap-5 lg:gap-8 px-horizontal-spacing`}
    >
      {displayedCategories.map((category, index) => (
        <CategoryCard key={index} category={category} variant={variant} />
      ))}
    </ul>
  );
}
export default CategoriesWrapper;
