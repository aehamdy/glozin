import { useState } from "react";
import DeliveryMethodSelector from "./DeliveryMethodSelector";
import PaymentStatus from "./PaymentStatus";
import StoreLocations from "./StoreLocations";
import StoreNotification from "./StoreNotification";
import TextInput from "./TextInput";
import OrderDetailsForm from "./OrderDetailsForm";

function CheckoutFormSection() {
  const [contact, setContact] = useState({});

  return (
    <div className="checkout-form col-span-6">
      <div className="flex flex-col items-start">
        <StoreNotification alert="error" message="payment unavailable" />
        <form
          action=""
          className="part-1 flex flex-col items-start gap-4 w-full"
        >
          <div className="flex flex-col items-start gap-2 w-full">
            <h2 className="font-semibold text-xl text-black">Contact</h2>

            <TextInput
              type="email"
              placeholder="Type your email"
              className="w-full"
              required
            />
          </div>
          <DeliveryMethodSelector setContact={setContact} />
          {contact.deliveryMethod === "ship" ? (
            <OrderDetailsForm />
          ) : (
            contact.deliveryMethod === "pick-in-store" && <StoreLocations />
          )}
          <PaymentStatus />
          <StoreNotification alert="error" message="payment unavailable" />
          <input
            type="submit"
            value="Pay now"
            className="w-full mt-4 py-3 font-semibold text-lg text-[#707070] bg-cloud-gray"
            disabled
          />
        </form>
      </div>
    </div>
  );
}
export default CheckoutFormSection;
