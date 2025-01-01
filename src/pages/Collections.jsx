import CollectionsWrapper from "../components/CollectionsWrapper";
import SectionHeader from "../components/SectionHeader";

function Collections() {
  return (
    <section className="pt-vertical-spacing px-horizontal-spacing">
      <SectionHeader
        title="Collections List"
        subtitle="Posuere in netus a eu varius adipiscing suspendisse elementum vitae temporsuspendisse ullamcorper aenean taciti morbi potenti."
      />
      <CollectionsWrapper />
    </section>
  );
}
export default Collections;
