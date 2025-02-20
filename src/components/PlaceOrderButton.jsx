import { useUserData } from "../context/UserDataContext";

function PlaceOrderButton() {
  const { isUserDataValid } = useUserData();
  const isValid = isUserDataValid;

  return (
    <input
      type="submit"
      value="Pay now"
      className="w-full mt-4 py-3 font-semibold text-lg"
      disabled={isValid}
    />
  );
}
export default PlaceOrderButton;
