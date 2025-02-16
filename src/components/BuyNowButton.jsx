/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import Button from "./Button";
import { useCart } from "../context/CartContext";
import { SET_BUY_NOW_PRODUCT } from "../constants/actionTypes";

function BuyNowButton({ product, isAgreementChecked }) {
  const { dispatchCart } = useCart();

  const handleOnClick = (e) => {
    if (isAgreementChecked) {
      dispatchCart({ type: SET_BUY_NOW_PRODUCT, payload: product });
    } else {
      e.preventDefault();
    }
  };

  return (
    <>
      {isAgreementChecked ? (
        <Link
          to="/checkout"
          onClick={(e) => handleOnClick(e)}
          className={`py-2.5 text-primary-light bg-red-500 hover:bg-red-600 active:bg-red-700 rounded-medium duration-short`}
        >
          Buy Now
        </Link>
      ) : (
        <Button
          value="Buy Now"
          status={true}
          handleClick={() => console.log("button has clicked")}
          className="py-2.5 bg-red-300 rounded-medium cursor-not-allowed"
        />
      )}
    </>
  );
}
export default BuyNowButton;
