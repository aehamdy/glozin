import {
  SET_COUNTRY,
  SET_LOCATION_FEES,
  SET_SHIPPING_FEES,
} from "../constants/actionTypes";
import { useCheckout } from "../context/CheckoutContext";
import { useUserData } from "../context/UserDataContext";
import countries from "../data/countries";

function CountryDropdown() {
  const { dispatchCheckout } = useCheckout();
  const { dispatchUserData } = useUserData();

  const onSelectChange = (e) => {
    const selectedCountry = countries.find((c) => c.value === e.target.value);

    dispatchCheckout({
      type: SET_SHIPPING_FEES,
      payload: selectedCountry.shippingFees,
    });

    dispatchUserData({ type: SET_COUNTRY, payload: selectedCountry.country });
    dispatchUserData({
      type: SET_LOCATION_FEES,
      payload: selectedCountry.shippingFees,
    });
  };

  return (
    <select
      onChange={onSelectChange}
      defaultValue=""
      className="w-full p-2 bg-white border rounded-lg"
    >
      <option value="" disabled>
        Select country
      </option>
      {countries.map((country) => (
        <option key={country.value} value={country.value}>
          {country.country}
        </option>
      ))}
    </select>
  );
}
export default CountryDropdown;
