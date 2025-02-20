import { Link } from "react-router-dom";
import { useUserData } from "../context/UserDataContext";

function PlaceOrderButton() {
  const { isUserDataValid } = useUserData();
  const isValid = isUserDataValid;
  const buttonValue = "Place Order";
  const defaultStyles = "w-full mt-4 py-3 font-semibold text-lg";

  return isValid ? (
    <Link
      to=""
      className={`${defaultStyles} text-white bg-blue-500 hover:bg-blue-600 active:bg-blue-700 shadow-md hover:shadow-xl active:shadow-none transition-all duration-short cursor-pointer`}
    >
      {buttonValue}
    </Link>
  ) : (
    <button
      className={`${defaultStyles} text-[#707070] bg-cloud-gray cursor-not-allowed`}
      disabled
    >
      {buttonValue}
    </button>
  );
}
export default PlaceOrderButton;
