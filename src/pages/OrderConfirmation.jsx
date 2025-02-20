import { Link } from "react-router-dom";
import ROUTES from "../config/routes";
import storeData from "../data/storeData";

function OrderConfirmation() {
  return (
    <section className="py-10 px-4 bg-emerald-600">
      <div className="flex flex-col items-center gap-0 lg:w-3/4 lg:mx-auto">
        <div className="flex flex-col gap-3">
          <h2 className="font-bold text-4xl">
            Woohoo! Your order is confirmed.
          </h2>
          <p className="text-lg">
            <span className="font-bold">
              {storeData.name.charAt(0).toUpperCase() +
                storeData.name.slice(1).toLowerCase()}
            </span>{" "}
            will start working on this right away.
          </p>
          <div>
            <p className="">
              Delivery times are estimated. If you&apos;re experiencing
              difficulty with this order.
            </p>
            <p>
              Please{" "}
              <Link to={ROUTES.CONTACT} className="underline">
                Contact us
              </Link>
            </p>
          </div>
        </div>

        <div className="my-4">
          <h3 className="mb-2 font-semibold text-2xl">Order Details</h3>
          <div className="flex gap-2 p-2 font-semibold text-zinc-900 bg-yellow-300 rounded-md">
            <p className="">Order Number:</p>
            <h4 className="font-light">#1234</h4>
          </div>
        </div>
      </div>
    </section>
  );
}
export default OrderConfirmation;
