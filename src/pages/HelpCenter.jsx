import FAQ from "../components/FAQ";
import HelpCenterCTA from "../components/HelpCenterCTA";
import SectionHeader from "../components/SectionHeader";
import storeData from "../data/storeData";

function HelpCenter() {
  return (
    <section className="py-vertical-spacing text-content-medium-dark">
      <SectionHeader
        title="Help Center"
        subtitle={`Please use the below form. You can also call customer service on ${storeData.phone}.`}
      />
      <div className="grid grid-cols-1 md:grid-cols-5 gap-y-10 md:gap-10 mt-16 px-horizontal-spacing md:px-vertical-spacing">
        <HelpCenterCTA />
        <FAQ />
      </div>
    </section>
  );
}
export default HelpCenter;
