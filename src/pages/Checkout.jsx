import { useState } from "react";
import CheckoutCartSection from "../components/CheckoutCartSection";
import CheckoutFormSection from "../components/CheckoutFormSection";

function Checkout() {
  const INITIAL_VALUE = {
    email: "",
    deliveryMethod: "",
    country: "",
    shippingFees: 0,
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
      <CheckoutCartSection shippingFees={contact.shippingFees} />
    </section>
  );
}
export default Checkout;
