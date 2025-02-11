/* eslint-disable react/prop-types */
import { useCart } from "../context/CartContext";
import countries from "../data/countries";

function CountryDropdown({ setContact }) {
  const { subtotal } = useCart();

  const onSelectChange = (e) => {
    const selectedCountry = countries.find((c) => c.value === e.target.value);
    setContact((prev) => ({
      ...(prev || {}),
      country: selectedCountry.value,
      shippingFees: subtotal >= 500 ? 0 : selectedCountry.shippingFees,
    }));
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
