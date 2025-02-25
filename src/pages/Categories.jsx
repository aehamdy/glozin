import CategoriesWrapper from "../components/CategoriesWrapper";
import SectionHeader from "../components/SectionHeader";

function Categories() {
  return (
    <section className="pt-vertical-spacing px-horizontal-spacing">
      <SectionHeader
        heading="Collections List"
        desc="Posuere in netus a eu varius adipiscing suspendisse elementum vitae temporsuspendisse ullamcorper aenean taciti morbi potenti."
      />
      <CategoriesWrapper />
    </section>
  );
}
export default Categories;
