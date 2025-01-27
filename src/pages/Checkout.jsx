import CheckoutForm from "../components/CheckoutForm";

function Checkout() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-12 px-horizontal-spacing text-black">
      <CheckoutForm />
      <div className="checkout-cart-section col-span-6"></div>
    </section>
  );
}
export default Checkout;
