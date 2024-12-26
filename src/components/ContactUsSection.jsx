import ContactFormSection from "./ContactFormSection";
import CustomerSupport from "./CustomerSupport";

function ContactUsSection() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 px-vertical-spacing">
      <CustomerSupport />
      <ContactFormSection />
    </div>
  );
}
export default ContactUsSection;
