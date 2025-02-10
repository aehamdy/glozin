import { useState } from "react";
import CheckoutCartSection from "../components/CheckoutCartSection";
import CheckoutFormSection from "../components/CheckoutFormSection";

function Checkout() {
  const INITIAL_VALUE = {
    email: "",
    deliveryMethod: "",
    country: "",
    shippingFees: null,
    firstName: "",
    lastName: "",
    address: "",
    apartment: "",
    city: "",
    zipCode: "",
  };
  const [contact, setContact] = useState(INITIAL_VALUE);

  return (
    <section className="grid grid-cols-1 lg:grid-cols-12 gap-0 lg:gap-0 text-black">
      <CheckoutFormSection contact={contact} setContact={setContact} />
      <CheckoutCartSection
        shippingFees={contact.shippingFees}
        selectedCountry={contact.country}
        contact={contact}
        setContact={setContact}
      />
    </section>
  );
}
export default Checkout;
