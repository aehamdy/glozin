function FooterNewsletterForm() {
  return (
    <form action="#">
      <div className="flex flex-wrap justify-evenly items-center gap-4">
        <input
          type="email"
          name=""
          id=""
          placeholder="Enter your email..."
          className="flex-grow py-3 px-3 font-medium text-secondary-dark bg-primary-light border border-primary-border rounded-medium"
        />
        <button
          type="button"
          className="flex-grow py-3 px-8 font-semibold text-secondary-dark hover:text-primary-light bg-primary-light hover:bg-secondary-dark border border-primary-light rounded-medium duration-short"
        >
          Sign Up
        </button>
      </div>
    </form>
  );
}
export default FooterNewsletterForm;
