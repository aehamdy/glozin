function OrderConfirmation() {
  return (
    <section className="h-[86dvh] py-10 px-4 bg-emerald-600">
      <div className="flex flex-col items-center gap-3 lg:w-3/4 lg:mx-auto">
        <div className="flex flex-col gap-3">
          <h2 className="font-bold text-4xl">
            Woohoo! Your order is confirmed.
          </h2>
          <p className="text-lg">
            <span className="font-bold">Glozin</span> will start working on this
            right away.
          </p>
          <div>
            <p className="">
              Delivery time are estimated. If you&apos;re experiencing with this
              order.
            </p>
            <p>
              Please <span className="underline">Contact us</span>
            </p>
          </div>
        </div>

        <div>
          <h3>Order Details</h3>
          <div className="flex gap-2">
            <p>Order Number:</p>
            <h4>#RandomNumber</h4>
          </div>
        </div>
      </div>

      <div>order details</div>
    </section>
  );
}
export default OrderConfirmation;
