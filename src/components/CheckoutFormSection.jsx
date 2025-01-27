import DeliveryMethodSelector from "./DeliveryMethodSelector";
import Icon from "./Icon";
import StoreLocations from "./StoreLocations";
import StoreNotification from "./StoreNotification";

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

            <input
              type="email"
              name=""
              id=""
              placeholder="Type your email"
              className="w-full py-1.5 px-2 bg-white border focus:border-blue-400 outline-none rounded-lg transition-all duration-short"
              required
            />
          </div>

          <DeliveryMethodSelector />

          {/* Ship form */}
          <select
            name=""
            id=""
            className="w-full p-2 bg-white border rounded-lg"
          >
            <option value="CH">China</option>
            <option value="FR">France</option>
            <option value="UK">United Kingdom</option>
            <option value="US">United States</option>
          </select>
          <div className="flex items-center gap-3 w-full">
            <input
              type="text"
              name="first-name"
              id="first-name"
              placeholder="First Name (optional)"
              className="w-1/2 py-1 px-2 bg-white border focus:border-blue-400 outline-none rounded-md transition-all duration-short"
            />
            <input
              type="text"
              name="last-name"
              id="last-name"
              placeholder="Last Name"
              className="w-1/2 py-1 px-2 bg-white border focus:border-blue-400 outline-none rounded-md transition-all duration-short"
              required
            />
          </div>
          <input
            type="text"
            name="address"
            id="address"
            placeholder="Address"
            className="w-full py-1.5 px-2 bg-white border focus:border-blue-400 outline-none rounded-lg transition-all duration-short"
            required
          />
          <input
            type="text"
            name="apartment"
            id="apartment"
            className="w-full py-1.5 px-2 bg-white border focus:border-blue-400 outline-none rounded-lg transition-all duration-short"
            placeholder="Apartment, suite, etc. (optional)"
          />
          <div className="flex items-center gap-3 w-full">
            <input
              type="text"
              name="city"
              id="city"
              placeholder="City"
              className="w-1/2 py-1 px-2 bg-white border focus:border-blue-400 outline-none rounded-md transition-all duration-short"
              required
            />
            <input
              type="text"
              name="zipcode"
              id="zipcode"
              placeholder="ZIP Code"
              className="w-1/2 py-1 px-2 bg-white border focus:border-blue-400 outline-none rounded-md transition-all duration-short"
              required
            />
          </div>

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
