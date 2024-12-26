import SectionHeader from "../components/SectionHeader";
import storeData from "../data/storeData";

function OurStores() {
  return (
    <section className="py-vertical-spacing text-content-medium-dark">
      <SectionHeader
        title="Our Stores"
        subtitle={`Please use the below form. You can also call customer service on ${storeData.phone}.`}
      />
    </section>
  );
}
export default OurStores;
