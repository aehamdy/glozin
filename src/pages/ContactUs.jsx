import ContactUsSection from "../components/ContactUsSection";
import SectionHeader from "../components/SectionHeader";
import storeData from "../data/storeData";

function ContactUs() {
  return (
    <section className="py-vertical-spacing text-content-medium-dark">
      <SectionHeader
        heading="Contact Us"
        desc={`Please use the below form. You can also call customer service on ${storeData.phone}.`}
      />
      <ContactUsSection />
    </section>
  );
}
export default ContactUs;
