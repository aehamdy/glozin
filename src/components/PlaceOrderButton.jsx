import { useUserData } from "../context/UserDataContext";

function PlaceOrderButton() {
  const { isUserDataValid } = useUserData();
  const isValid = isUserDataValid;

  return (
    <input
      type="submit"
      value="Pay now"
      className={`w-full mt-4 py-3 font-semibold text-lg  ${
        isValid
          ? "text-white bg-blue-500 hover:bg-blue-600 active:bg-blue-700 shadow-lg active:shadow-none transition-all duration-short cursor-pointer"
          : "text-[#707070] bg-cloud-gray cursor-not-allowed"
      }`}
      disabled={isValid}
    />
  );
}
export default PlaceOrderButton;
