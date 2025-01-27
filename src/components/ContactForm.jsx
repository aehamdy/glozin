import TextInput from "./TextInput";

function ContactForm() {
  return (
    <>
      <div className="flex items-center gap-3 w-full">
        <TextInput
          name="firstName"
          id="firstName"
          placeholder="First Name (Optional)"
          className="w-1/2"
        />
        <TextInput
          name="lastName"
          id="lastName"
          placeholder="Last Name"
          className="w-1/2"
          required
        />
      </div>
      <TextInput
        name="address"
        id="address"
        placeholder="Address"
        className="w-full"
        required
      />

      <TextInput
        name="apartment"
        id="apartment"
        placeholder="Apartment, suite, etc. (Optional)"
        className="w-full"
      />
      <div className="flex items-center gap-3 w-full">
        <TextInput
          name="city"
          id="city"
          placeholder="City"
          className="w-1/2"
          required
        />
        <TextInput
          name="zipcode"
          id="zipcode"
          placeholder="ZIP Code"
          className="w-1/2"
          required
        />
      </div>
    </>
  );
}
export default ContactForm;
