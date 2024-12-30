function FooterNewsletterForm() {
  return (
    <form action="#" className="w-full text-center lg:text-start">
      <div className="w-full md:w-3/5 lg:w-full md:mx-auto lg:mx-0 flex md:flex-wrap lg:flex-nowrap justify-between lg:justify-evenly items-center gap-4">
        <input
          type="email"
          name=""
          id=""
          placeholder="Enter your email..."
          className="w-3/5 md:w-full lg:w-3/5 flex-grow py-2 md:py-3 px-3 text-secondary-dark bg-primary-light border border-primary-border rounded-medium"
        />
        <button
          type="button"
          className="w-fit md:w-full lg:w-[30%] flex-grow py-2 md:py-3 px-4 md:px-5 lg:px-0 font-semibold text-secondary-dark hover:text-primary-light bg-primary-light hover:bg-secondary-dark border border-primary-light rounded-medium duration-short"
        >
          Sign Up
        </button>
      </div>
    </form>
  );
}
export default FooterNewsletterForm;
