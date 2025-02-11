/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import ApplyDiscountButton from "./ApplyDiscountButton";
import DiscountInput from "./DiscountInput";
import { useCart } from "../context/CartContext";
import discountCodes from "../data/discountCodes";
import calculateCartTotal from "../utils/calculateCartTotal";
import countries from "../data/countries";

function DiscountSection({ contact, setContact }) {
  const INITIAL_VALUE = {
    codeValue: "",
    discountValue: 0,
    isShippingFree: false,
    error: "",
  };
  const [discount, setDiscount] = useState(INITIAL_VALUE);
  const { subtotal, setSubtotal, setNewSubtotal, cartList, buyNowProduct } =
    useCart();
  const errorMessage = "Enter a valid discount code";
  const cartTotal = calculateCartTotal(cartList);
  const updateShippingFees = (country) => {
    return countries.find(
      (c) => c.value.toLowerCase() === country.toLowerCase()
    );
  };

  const checkCodeAvailability = () => {
    return discountCodes.find(
      (code) => code.code.toLowerCase() === discount.codeValue.toLowerCase()
    );
  };

  const handleOnApplyClick = () => {
    if (buyNowProduct) {
      setSubtotal(buyNowProduct.price);
    } else {
      setSubtotal(cartTotal);
    }

    setDiscount((prev) => ({
      ...prev,
      codeValue: discount.codeValue,
      error: "",
    }));
    setContact((prev) => ({
      ...prev,
      shippingFees: updateShippingFees(contact.country).shippingFees,
    }));

    const codeAvailable = checkCodeAvailability();

    if (
      codeAvailable &&
      codeAvailable.label.toLowerCase() === "free shipping"
    ) {
      setContact((prev) => ({
        ...prev,
        shippingFees: 0,
      }));
    } else if (codeAvailable) {
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

  useEffect(() => {
    console.log(contact);
  }, [contact, discount]);

  return (
    <div className="flex flex-col gap-2">
      <div className="flex justify-between">
        <DiscountInput
          discount={discount}
          setDiscount={setDiscount}
          handleOnApplyClick={handleOnApplyClick}
        />
        <ApplyDiscountButton
          discount={discount}
          handleOnApplyClick={handleOnApplyClick}
        />
      </div>
      {discount.error && (
        <p className="ps-1 text-start text-red-500">{errorMessage}</p>
      )}
    </div>
  );
}
export default DiscountSection;
