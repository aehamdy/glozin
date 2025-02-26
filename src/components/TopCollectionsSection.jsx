import SectionHeader from "./SectionHeader";
import CategoriesWrapper from "./CategoriesWrapper";

function TopCollectionsSection() {
  return (
    <section className="flex flex-col mb-vertical-spacing mx-horizontal-spacing">
      <SectionHeader
        heading="Top Collections"
        desc="Express your style with our standout collection—fashion meets sophistication."
      />
      <CategoriesWrapper variant="circle" />
    </section>
  );
}
export default TopCollectionsSection;
