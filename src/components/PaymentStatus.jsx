import Icon from "./Icon";

function PaymentStatus() {
  return (
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
  );
}
export default PaymentStatus;
