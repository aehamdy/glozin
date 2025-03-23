/* eslint-disable react/prop-types */
import { forwardRef } from "react";
import categories from "../data/categories";
import CategoryCard from "./CategoryCard";

const CategoriesWrapper = forwardRef(({ variant }, ref) => {
  const displayedCategories = variant ? categories.slice(0, 6) : categories;

  return (
    <div className="relative">
      <ul
        ref={ref}
        className={` ${
          variant
            ? "flex justify-between gap-4 snap-x lg:snap-none snap-mandatory lg:snap-mandatory overflow-x-scroll overflow-y-hidden lg:overflow-x-visible scrollbar-hide"
            : "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 md:gap-5 lg:gap-8"
        } px-horizontal-spacing`}
      >
        {displayedCategories.map((category, index) => (
          <CategoryCard
            key={index}
            index={index}
            category={category}
            variant={variant}
          />
        ))}
      </ul>
    </div>
  );
});

CategoriesWrapper.displayName = "CategoriesWrapper";

export default CategoriesWrapper;
