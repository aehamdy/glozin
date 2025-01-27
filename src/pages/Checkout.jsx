import Icon from "../components/Icon";
import StoreNotification from "../components/StoreNotification";

function Checkout() {
  const deliveryMethods = [
    {
      method: "Ship",
      icon: "wishlist",
      inputId: "delivery-ship",
    },
    {
      method: "Pick in store",
      icon: "filledStar",
      inputId: "delivery-instore",
    },
  ];
  return (
    <section className="grid grid-cols-1 lg:grid-cols-12 px-horizontal-spacing text-black">
      <div className="checkout-form col-span-6">
        <div className="flex flex-col items-start">
          <StoreNotification
            alert="error"
            message="This store can't accept payments right now. Refresh this page
            or come back later."
          />
          <form action="" className="flex flex-col items-start gap-4 w-full">
            <div className="flex flex-col items-start gap-2 w-full">
              <h2 className="font-semibold text-xl text-black">Contact</h2>

              <input
                type="email"
                name=""
                id=""
                placeholder="Type your email"
                className="w-full py-1.5 px-2 bg-white border focus:border-blue-400 outline-none rounded-lg transition-all duration-short"
              />
            </div>

            <div className="flex flex-col items-start gap-2 w-full">
              <h2 className="font-semibold text-xl text-black">Delivery</h2>

              <ul className="w-full">
                {deliveryMethods.map((method, index) => (
                  <li key={index} className="w-full">
                    <input
                      type="radio"
                      name="delivery"
                      id={method.inputId}
                      className="hidden peer"
                    />
                    <label
                      htmlFor={method.inputId}
                      className={`flex justify-between items-center w-full py-2 px-3 border ${
                        index !== 0 && "border-t-0 peer-checked:border-t"
                      }
                    peer-checked:text-blue-500 peer-checked:bg-blue-50 peer-checked:border-blue-400 
                    ${
                      index === 0
                        ? "rounded-t-lg peer-checked:rounded-t-lg"
                        : index === deliveryMethods.length - 1 &&
                          "rounded-b-lg peer-checked:rounded-b-lg"
                    }
                    cursor-pointer transition-all duration-200`}
                    >
                      <div className="text-secondary-dark">{method.method}</div>
                      <Icon name={method.icon} size="18" />
                    </label>
                  </li>
                ))}
              </ul>
            </div>
          </form>
        </div>
      </div>
      <div className="order-checkout col-span-6"></div>
    </section>
  );
}
export default Checkout;
