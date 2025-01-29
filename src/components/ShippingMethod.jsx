function ShippingMethod() {
  return (
    <div className="flex flex-col items-start gap-2 w-full mt-2 text-sm">
      <h2 className="font-semibold text-xl text-black mb-1">Shipping method</h2>
      <div className="w-full p-4 text-start text-[#707070] bg-cloud-gray rounded-lg">
        <p>Enter your shipping address to view available shipping methods.</p>
      </div>
    </div>
  );
}
export default ShippingMethod;
