import CheckoutCartSection from "../components/CheckoutCartSection";
import CheckoutFormSection from "../components/CheckoutFormSection";

function Checkout() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-12 px-horizontal-spacing text-black">
      <CheckoutFormSection />
      <CheckoutCartSection />
    </section>
  );
}
export default Checkout;
