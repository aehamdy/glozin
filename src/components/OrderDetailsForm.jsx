import ContactForm from "./ContactForm";
import CountryDropdown from "./CountryDropdown";
import ShippingMethod from "./ShippingMethod";

function OrderDetailsForm() {
  return (
    <>
      <CountryDropdown />
      <ContactForm />
      <ShippingMethod />
    </>
  );
}
export default OrderDetailsForm;
