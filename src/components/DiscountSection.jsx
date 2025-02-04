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
  const { subtotal, setSubtotal, setNewSubtotal, cartList } = useCart();
  const errorMessage = "Enter a valid discount code";
  const cartTotal = calculateCartTotal(cartList);

  const checkCodeAvailability = () => {
    return discountCodes.find(
      (code) => code.code.toLowerCase() === discount.codeValue.toLowerCase()
    );
  };

  const checkExistingCode = () => {
    setSubtotal(cartTotal);

    setDiscount((prev) => ({ ...prev, codeValue: discount.codeValue }));

    const codeAvailable = checkCodeAvailability();

    if (codeAvailable) {
      setDiscount((prev) => ({
        ...prev,
        discountValue: codeAvailable.discountAmount,
        error: "",
      }));
    } else {
      setDiscount((prev) => ({
        ...prev,
        discountValue: "",
        error: "Code isn't available",
      }));
      setNewSubtotal(0);
    }

    return codeAvailable;
  };

  useEffect(() => {
    discount.discountValue > 0 &&
      setNewSubtotal(subtotal - (subtotal * discount.discountValue) / 100);
  }, [discount.discountValue]);

  return (
    <div className="flex flex-col gap-2">
      <div className="flex justify-between">
        <DiscountInput
          discount={discount}
          setDiscount={setDiscount}
          checkExistingCode={checkExistingCode}
        />
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
