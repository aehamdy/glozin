function ContactFormSection() {
  return (
    <div className="text-secondary-dark">
      <div>
        <h3 className="font-semibold text-lg">Contact Us</h3>
        <p className="text-content-medium-dark">
          Please submit all general enquiries in the contact form below and we
          look forward to hearing from you soon.
        </p>
      </div>
      <form action="" className="flex flex-col gap-5">
        <div className="flex justify-between gap-5">
          <input
            type="text"
            name=""
            id=""
            placeholder="Your Name"
            className="w-1/2 p-2 bg-primary-light border border-primary-border rounded-medium"
          />
          <input
            type="email"
            name=""
            id=""
            placeholder="Your Email"
            className="w-1/2 p-2 bg-primary-light border border-primary-border rounded-medium"
          />
        </div>
        <textarea
          name=""
          id=""
          placeholder="Pleade enter your message"
          className="w-full p-2 bg-primary-light border border-primary-border rounded-lg"
        ></textarea>
        <label htmlFor="" className="flex gap-3">
          <input type="checkbox" name="" id="" />
          <p>
            I agree to the{" "}
            <a href="#" className="">
              Privacy Policy
            </a>{" "}
            of the website.
          </p>
        </label>
        <button type="button">Send</button>
      </form>
    </div>
  );
}
export default ContactFormSection;
