import { useEffect, useState } from "react";
import ApplyDiscountButton from "./ApplyDiscountButton";
import DiscountInput from "./DiscountInput";
import { useCart } from "../context/CartContext";
import discountCodes from "../data/discountCodes";
import calculateCartTotal from "../utils/calculateCartTotal";

function DiscountSection() {
  const INITIAL_VALUE = {
    codeValue: "",
    discountValue: 0,
    error: "",
  };
  const [discount, setDiscount] = useState(INITIAL_VALUE);
  const { subtotal, setSubtotal, cartList } = useCart();
  const errorMessage = "Code isn't available";
  const cartTotal = calculateCartTotal(cartList);

  const checkExistingCode = () => {
    setSubtotal(cartTotal);
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
      setSubtotal(subtotal - (subtotal * discount.discountValue) / 100);
  }, [discount.discountValue]);

  return (
    <div className="flex flex-col gap-2">
      <div className="flex justify-between">
        <DiscountInput discount={discount} setDiscount={setDiscount} />
        <ApplyDiscountButton
          discount={discount}
          checkExistingCode={checkExistingCode}
        />
      </div>
      {discount.error && (
        <p className="ps-1 text-start text-red-500">{errorMessage}</p>
      )}
    </div>
  );
}
export default DiscountSection;
