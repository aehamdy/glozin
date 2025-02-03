import { useEffect, useState } from "react";
import ApplyDiscountButton from "./ApplyDiscountButton";
import DiscountInput from "./DiscountInput";
import { useCart } from "../context/CartContext";

function DiscountSection() {
  const INITIAL_VALUE = {
    couponCode: "",
    discountAmount: 0,
    error: "",
  };
  const [discount, setDiscount] = useState(INITIAL_VALUE);
  const { subtotal, setSubtotal, cartList } = useCart();

  const checkExistingCode = () => {};

  useEffect(() => {
    discount.discountAmount > 0 &&
      setSubtotal((discount.discountAmount * subtotal) / 100);
  }, [discount.discountAmount]);

  return (
    <div className="flex justify-between">
      <DiscountInput discount={discount} setDiscount={setDiscount} />
      <ApplyDiscountButton
        discount={discount}
        checkExistingCode={checkExistingCode}
      />
    </div>
  );
}
export default DiscountSection;
