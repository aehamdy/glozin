/* eslint-disable react/prop-types */
function CountryDropdown({ setContact }) {
  const countries = [
    {
      value: "CH",
      country: "China",
      shippingFees: 20,
    },
    {
      value: "FR",
      country: "France",
      shippingFees: 18,
    },
    {
      value: "UK",
      country: "United Kingdom",
      shippingFees: 15,
    },
    {
      value: "US",
      country: "United States",
      shippingFees: 20,
    },
  ];

  const onSelectChange = (e) => {
    const selectedCountry = countries.find((c) => c.value === e.target.value);
    setContact((prev) => ({
      ...(prev || {}),
      country: selectedCountry.value,
      shippingFees: selectedCountry.shippingFees,
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
