import SectionHeader from "../components/SectionHeader";
import storeData from "../data/storeData";

function ContactUs() {
  return (
    <section className="py-vertical-spacing">
      <SectionHeader
        title="Contact Us"
        subtitle={`Please use the below form. You can also call customer service on ${storeData.phone}.`}
      />
    </section>
  );
}
export default ContactUs;
