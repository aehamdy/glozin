import SectionHeader from "./SectionHeader";
import CategoriesWrapper from "./CategoriesWrapper";
import Icon from "./Icon";
import { useRef } from "react";

function TopCollectionsSection() {
  const containerRef = useRef(null);

  const scroll = (direction) => {
    if (containerRef.current) {
      const scrollAmount = 250;
      containerRef.current.scrollBy({
        left: direction === "next" ? scrollAmount : -scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="flex flex-col mb-vertical-spacing mx-horizontal-spacing">
      <SectionHeader
        heading="Top Collections"
        desc="Express your style with our standout collection—fashion meets sophistication."
      />

      {/* Navigation buttons */}
      <div className="lg:hidden flex justify-between items-center cursor-not-allowed">
        <button
          onClick={() => scroll("prev")}
          className="p-2 text-secondary-dark hover:text-primary-light bg-gray-50 hover:bg-secondary-dark rounded-full duration-100 cursor-pointer"
        >
          <Icon name="leftArrow" />
        </button>
        <button
          onClick={() => scroll("next")}
          className="p-2 text-secondary-dark hover:text-primary-light bg-gray-50 hover:bg-secondary-dark rounded-full duration-100 cursor-pointer"
        >
          <Icon name="rightArrow" />
        </button>
      </div>

      <CategoriesWrapper variant="circle" ref={containerRef} />
    </section>
  );
}
export default TopCollectionsSection;
