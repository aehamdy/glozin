import Subtotal from "./Subtotal";
import { useCheckout } from "../context/CheckoutContext";
import CheckoutButton from "./CheckoutButton";

function CartDrawerPanel() {
  const { subtotal } = useCheckout();

  return (
    <div className="flex flex-col justify-between gap-6 mt-auto pt-4 pb-4 px-4 text-secondary-dark bg-cloud-gray border-t">
      <div className="flex justify-between font-semibold">
        <div>Subtotal:</div>
        <Subtotal subtotalValue={subtotal} />
      </div>
      <CheckoutButton />
    </div>
  );
}
export default CartDrawerPanel;
