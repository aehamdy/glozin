import ApplyDiscountButton from "./ApplyDiscountButton";
import DiscountInput from "./DiscountInput";

function DiscountSection() {
  return (
    <div className="flex justify-between">
      <DiscountInput />
      <ApplyDiscountButton />
    </div>
  );
}
export default DiscountSection;
