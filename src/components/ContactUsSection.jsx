import ContactFormSection from "./ContactFormSection";
import CustomerSupport from "./CustomerSupport";

function ContactUsSection() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-16 px-6 lg:px-vertical-spacing">
      <CustomerSupport />
      <ContactFormSection />
    </div>
  );
}
export default ContactUsSection;
