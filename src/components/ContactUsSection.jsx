import ContactFormSection from "./ContactFormSection";
import CustomerSupport from "./CustomerSupport";

function ContactUsSection() {
  return (
    <div className="flex justify-between gap-8">
      <CustomerSupport />
      <ContactFormSection />
    </div>
  );
}
export default ContactUsSection;
