import ContactForm from "./ContactForm";
import CountryDropdown from "./CountryDropdown";
import DeliveryMethodSelector from "./DeliveryMethodSelector";
import Icon from "./Icon";
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

          <div className="flex flex-col items-start gap-2 w-full text-sm">
            <h2 className="font-semibold text-xl text-black">
              Shipping method
            </h2>
            <div className="w-full p-4 text-start text-[#707070] bg-cloud-gray rounded-lg">
              <p>
                Enter your shipping address to view available shipping methods.
              </p>
            </div>
          </div>

          <StoreLocations />

          <div className="flex flex-col items-start gap-2 w-full text-sm text-[#707070]">
            <h2 className="font-semibold text-xl text-black">Payment</h2>
            <p>All transactions are secure and encrypted</p>
            <div className="flex flex-col items-center w-full p-4 bg-cloud-gray rounded-lg">
              <div className="relative">
                <Icon name="warning" size="45" />
              </div>
              <p>This store can&apos;t accept payments right now.</p>
            </div>
          </div>

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
