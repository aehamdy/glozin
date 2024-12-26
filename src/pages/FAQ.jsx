import SectionHeader from "../components/SectionHeader";
import storeData from "../data/storeData";

function FAQ() {
  return (
    <section className="py-vertical-spacing text-content-medium-dark">
      <SectionHeader
        title="Help Center"
        subtitle={`Please use the below form. You can also call customer service on ${storeData.phone}.`}
      />
    </section>
  );
}
export default FAQ;
