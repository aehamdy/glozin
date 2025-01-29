import StoreNotification from "./StoreNotification";

function StoreLocations() {
  return (
    <div className="flex flex-col items-start gap-2 w-full mt-1 mb-2 text-sm text-[#707070]">
      <h2 className="font-semibold text-xl text-black">Store locations</h2>
      <StoreNotification
        alert="error"
        message="There are no pickup locations available."
      />
    </div>
  );
}
export default StoreLocations;
