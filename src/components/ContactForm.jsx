/* eslint-disable react/prop-types */
import FormInput from "./FormInput";

function ContactForm({ setContact, contact }) {
  return (
    <>
      <div className="flex items-center gap-3 w-full">
        <FormInput
          name="firstName"
          id="firstName"
          placeholder="First Name (Optional)"
          value={contact.firstName}
          setContact={setContact}
          className="w-1/2"
        />
        <FormInput
          name="lastName"
          id="lastName"
          placeholder="Last Name"
          className="w-1/2"
          value={contact.lastName}
          setContact={setContact}
          required
        />
      </div>
      <FormInput
        name="address"
        id="address"
        placeholder="Address"
        className="w-full"
        value={contact.address}
        setContact={setContact}
        required
      />

      <FormInput
        name="apartment"
        id="apartment"
        placeholder="Apartment, suite, etc. (Optional)"
        className="w-full"
        value={contact.apartment}
        setContact={setContact}
      />
      <div className="flex items-center gap-3 w-full">
        <FormInput
          name="city"
          id="city"
          placeholder="City"
          className="w-1/2"
          value={contact.city}
          setContact={setContact}
          required
        />
        <FormInput
          name="zipCode"
          id="zipcode"
          placeholder="ZIP Code"
          className="w-1/2"
          value={contact.zipCode}
          setContact={setContact}
          required
        />
      </div>
    </>
  );
}
export default ContactForm;
