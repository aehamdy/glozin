/* eslint-disable react/prop-types */
import ContactForm from "./ContactForm";
import CountryDropdown from "./CountryDropdown";
import ShippingMethod from "./ShippingMethod";

function OrderDetailsForm({ setContact }) {
  return (
    <>
      <CountryDropdown setContact={setContact} />
      <ContactForm />
      <ShippingMethod />
    </>
  );
}
export default OrderDetailsForm;
