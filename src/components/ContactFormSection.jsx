function ContactFormSection() {
  return (
    <div className="lg:col-span-2 space-y-4 text-secondary-dark">
      <div>
        <h3 className="font-semibold text-lg">Contact Us</h3>
        <p className="text-start text-content-medium-dark">
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
            className="w-full py-3 px-4 bg-primary-light border border-primary-border rounded-medium placeholder:text-sm"
          />
          <input
            type="email"
            name=""
            id=""
            placeholder="Your Email"
            className="w-full py-3 px-4 bg-primary-light border border-primary-border rounded-medium placeholder:text-sm"
          />
        </div>
        <textarea
          name=""
          id=""
          placeholder="Please enter your message"
          className="w-full p-4 bg-primary-light border border-primary-border rounded-2xl placeholder:text-sm"
        ></textarea>
        <label htmlFor="" className="flex gap-3">
          <input type="checkbox" name="" id="" className="cursor-pointer" />
          <p>
            I agree to the{" "}
            <a
              href="#"
              className="font-semibold underline hover:text-blue-600 duration-medium"
            >
              Privacy Policy
            </a>{" "}
            of the website.
          </p>
        </label>
        <button
          type="button"
          className="w-fit me-auto py-2 px-12 text-primary-light bg-secondary-dark hover:bg-primary-dark border rounded-medium"
        >
          Send
        </button>
      </form>
    </div>
  );
}
export default ContactFormSection;
