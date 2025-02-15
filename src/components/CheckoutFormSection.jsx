/* eslint-disable react/prop-types */
import DeliveryMethodSelector from "./DeliveryMethodSelector";
import PaymentStatus from "./PaymentStatus";
import StoreLocations from "./StoreLocations";
import StoreNotification from "./StoreNotification";
import FormInput from "./FormInput";
import OrderDetailsForm from "./OrderDetailsForm";
import { useUserData } from "../context/UserDataContext";

function CheckoutFormSection({ contact, setContact }) {
  const { emailValue, deliveryMethodValue } = useUserData();

  return (
    <div className="col-span-6 order-2 lg:order-none p-5 lg:px-8">
      <div className="flex flex-col items-start">
        <StoreNotification alert="error" message="payment unavailable" />
        <form
          action=""
          className="part-1 flex flex-col items-start gap-4 w-full mt-6"
        >
          <div className="flex flex-col items-start gap-2 w-full">
            <h2 className="font-semibold text-xl text-black mb-1">Contact</h2>

            <FormInput
              type="email"
              name="email"
              placeholder="Type your email"
              className="w-full"
              value={emailValue}
              setContact={setContact}
              required
            />
          </div>
          <DeliveryMethodSelector />
          {deliveryMethodValue === "ship" ? (
            <OrderDetailsForm setContact={setContact} contact={contact} />
          ) : (
            deliveryMethodValue === "pick-in-store" && <StoreLocations />
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
