import { useEffect, useState } from "react";
import CategoriesWrapper from "../components/CategoriesWrapper";
import SectionHeader from "../components/SectionHeader";
import SkeletonWrapper from "../components/SkeletonWrapper";

function Categories() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setIsLoading(false);
    }, 2200);

    return () => clearTimeout(timerId);
  }, []);

  return (
    <section className="pt-vertical-spacing px-horizontal-spacing">
      <SectionHeader
        heading="Category List"
        desc="Posuere in netus a eu varius adipiscing suspendisse elementum vitae temporsuspendisse ullamcorper aenean taciti morbi potenti."
      />
      <div className="transition-opacity duration-500 ease-in-out">
        {isLoading ? (
          <SkeletonWrapper type="category-skeleton" />
        ) : (
          <CategoriesWrapper />
        )}
      </div>
    </section>
  );
}
export default Categories;
