import { SET_COUNTRY, SET_SHIPPING_COST } from "../constants/actionTypes";
import { useUserData } from "../context/UserDataContext";
import countries from "../data/countries";

function CountryDropdown() {
  const { dispatchUserData } = useUserData();

  const onSelectChange = (e) => {
    const selectedCountry = countries.find((c) => c.value === e.target.value);

    dispatchUserData({
      type: SET_SHIPPING_COST,
      payload: selectedCountry.shippingCost,
    });

    dispatchUserData({ type: SET_COUNTRY, payload: selectedCountry.country });
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
