/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import Button from "./Button";

function BuyNowButton({ product, isAgreementChecked, handleBuyNowClick }) {
  const handleOnClick = (e) => {
    handleBuyNowClick(e, product);
  };

  return (
    <>
      {isAgreementChecked ? (
        <Link
          to="/checkout"
          onClick={(e) => handleOnClick(e, product)}
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
