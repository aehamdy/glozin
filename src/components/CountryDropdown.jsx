function CountryDropdown() {
  const countries = [
    {
      value: "CH",
      country: "China",
    },
    {
      value: "FR",
      country: "France",
    },
    {
      value: "UK",
      country: "United Kingdom",
    },
    {
      value: "US",
      country: "United States",
    },
  ];
  return (
    <select name="" id="" className="w-full p-2 bg-white border rounded-lg">
      {countries.map((country, index) => (
        <option key={index} value={country.value}>
          {country.country}
        </option>
      ))}
    </select>
  );
}
export default CountryDropdown;
