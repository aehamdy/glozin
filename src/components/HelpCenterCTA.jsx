import { Link } from "react-router-dom";

function HelpCenterCTA() {
  return (
    <div className="col-span-2 flex flex-col gap-8 md:gap-5 md:sticky md:top-7 h-fit py-10 px-7 bg-[#F5F5F5] rounded-small">
      <h2 className="font-semibold text-2xl text-start">Contact Us</h2>

      <div className="flex flex-col text-start gap-5 text-secondary-dark">
        <p>
          If you have an issue or question that requires immediate assistance,
          you can click the button below to chat live with a Customer Service
          representative.
        </p>
        <p>
          Please allow 3 - 5 business days from the time your package arrives
          back to us for a refund to be issued.
        </p>
      </div>

      <div className="flex flex-col items-center gap-6 md:gap-4">
        <Link
          to="/contact"
          className="w-full py-3 px-10 font-semibold text-secondary-dark hover:text-primary-light bg-primary-light hover:bg-primary-dark border border-secondary-dark rounded-medium duration-short"
        >
          Contact Us
        </Link>
        <Link
          to="/about"
          className="w-full py-3 px-10 font-semibold text-primary-light bg-secondary-dark hover:bg-primary-dark rounded-medium duration-short"
        >
          About Us
        </Link>
      </div>
    </div>
  );
}
export default HelpCenterCTA;
