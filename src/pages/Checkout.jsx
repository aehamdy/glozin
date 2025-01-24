import StoreNotification from "../components/StoreNotification";

function Checkout() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-12 px-horizontal-spacing text-black">
      <div className="checkout-form col-span-6">
        <div className="flex flex-col items-start">
          <StoreNotification
            alert="error"
            message="This store can't accept payments right now. Refresh this page
            or come back later."
          />
          <form action="" className="flex flex-col items-start">
            <div>
              <h2 className="font-semibold text-xl text-black">Contact</h2>
            </div>

            <input
              type="email"
              name=""
              id=""
              placeholder="Type your email"
              className="w-full py-1.5 px-2 bg-white border focus:outline-none rounded-md"
            />

            <div>
              <h2 className="font-semibold text-xl text-black">Delivery</h2>
            </div>

            <ul>
              <li>
                <input type="radio" name="" id="" />
                <label htmlFor="" className="flex justify-between">
                  <div>Ship</div>
                  {/* <Icon name="wishlist" /> */}
                </label>
              </li>
              <li>
                <input type="radio" name="" id="" />
                <label htmlFor="" className="flex justify-between">
                  <div>Pickup in store</div>
                  {/* <Icon name="wishlist" /> */}
                </label>
              </li>
            </ul>

            <select name="" id="">
              <option value="CH">China</option>
              <option value="FR">France</option>
              <option value="UK">United Kingdom</option>
              <option value="US">United States</option>
            </select>
          </form>
        </div>
      </div>
      <div className="order-checkout col-span-6"></div>
    </section>
  );
}
export default Checkout;
