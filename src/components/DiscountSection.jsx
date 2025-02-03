import { useEffect, useState } from "react";
import ApplyDiscountButton from "./ApplyDiscountButton";
import DiscountInput from "./DiscountInput";
import { useCart } from "../context/CartContext";
import discountCodes from "../data/discountCodes";

function DiscountSection() {
  const INITIAL_VALUE = {
    codeValue: "",
    discountValue: 0,
    error: "",
  };
  const [discount, setDiscount] = useState(INITIAL_VALUE);
  const { subtotal, setSubtotal, cartList } = useCart();

  const checkExistingCode = () => {
    setDiscount((prev) => ({ ...prev, codeValue: discount.codeValue }));

    const codeStatus = discountCodes.find(
      (code) => code.code.toLowerCase() === discount.codeValue.toLowerCase()
    );

    codeStatus
      ? setDiscount((prev) => ({
          ...prev,
          discountValue: codeStatus.discountAmount,
          error: "",
        }))
      : setDiscount((prev) => ({ ...prev, error: "Code isn't available" }));

    return codeStatus;
  };

  useEffect(() => {
    discount.discountValue > 0 &&
      setSubtotal((discount.discountValue * subtotal) / 100);
  }, [discount.discountValue]);

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
