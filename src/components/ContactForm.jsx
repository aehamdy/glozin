import { useUserData } from "../context/UserDataContext";
import FormInput from "./FormInput";

function ContactForm() {
  const {
    firstNameValue,
    lastNameValue,
    addressValue,
    apartmentValue,
    cityValue,
    zipCodeValue,
  } = useUserData();
  return (
    <>
      <div className="flex items-center flex-wrap gap-4 w-full">
        <FormInput
          name="firstName"
          id="firstName"
          placeholder="First Name (Optional)"
          value={firstNameValue}
          className="flex-1 min-w-[250px]"
        />
        <FormInput
          name="lastName"
          id="lastName"
          placeholder="Last Name"
          className="flex-1 min-w-[250px]"
          value={lastNameValue}
          required
        />
      </div>
      <FormInput
        name="address"
        id="address"
        placeholder="Address"
        className="w-full"
        value={addressValue}
        required
      />

      <FormInput
        name="apartment"
        id="apartment"
        placeholder="Apartment, suite, etc. (Optional)"
        className="w-full"
        value={apartmentValue}
      />
      <div className="flex items-center gap-4 w-full">
        <FormInput
          name="city"
          id="city"
          placeholder="City"
          className="w-1/2"
          value={cityValue}
          required
        />
        <FormInput
          name="zipCode"
          id="zipcode"
          placeholder="ZIP Code"
          className="w-1/2"
          value={zipCodeValue}
          required
        />
      </div>
    </>
  );
}
export default ContactForm;
