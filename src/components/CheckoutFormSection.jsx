import ContactForm from "./ContactForm";
import CountryDropdown from "./CountryDropdown";
import DeliveryMethodSelector from "./DeliveryMethodSelector";
import Icon from "./Icon";
import ShippingMethod from "./ShippingMethod";
import StoreLocations from "./StoreLocations";
import StoreNotification from "./StoreNotification";
import TextInput from "./TextInput";

function CheckoutFormSection() {
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
          <DeliveryMethodSelector />
          {/* Ship form */}
          <CountryDropdown />
          <ContactForm />
          <ShippingMethod />
          <StoreLocations />
          git
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
