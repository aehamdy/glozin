import categories from "../data/categories";
import CategoryCard from "./CategoryCard";

function CategoriesWrapper() {
  return (
    <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 md:gap-5 lg:gap-8 px-horizontal-spacing">
      {categories.map((category, index) => (
        <CategoryCard key={index} category={category} />
      ))}
    </ul>
  );
}
export default CategoriesWrapper;
