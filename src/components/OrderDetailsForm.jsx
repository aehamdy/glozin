/* eslint-disable react/prop-types */
import ContactForm from "./ContactForm";
import CountryDropdown from "./CountryDropdown";
import ShippingMethod from "./ShippingMethod";

function OrderDetailsForm({ setContact, contact }) {
  return (
    <>
      <CountryDropdown setContact={setContact} />
      <ContactForm setContact={setContact} contact={contact} />
      <ShippingMethod />
    </>
  );
}
export default OrderDetailsForm;
