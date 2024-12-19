import FooterHeading from "./FooterHeading";
import FooterNewsletterForm from "./FooterNewsletterForm";

function FooterNewsletter() {
  return (
    // <div className="flex flex-col justify-between items-start gap-2 lg:gap-8">
    <div className="grid md:col-span-2 lg:col-span-1 lg:text-start">
      <FooterHeading title="Sign Up to Newsletter" />
      <p className="w-full lg:w-10/12 text-sm md:text-base  text-center lg:text-start">
        Sign up for <strong>10% off</strong> your first purchase and free
        shipping. Updates information on Sales and Offers.
      </p>

      <FooterNewsletterForm />

      <p className="w-full lg:w-11/12 text-sm md:text-base text-center lg:text-start">
        *By entering the e-mail you accept the{" "}
        <a
          href="#"
          className="font-semibold text-primary-light hover:text-primary-red duration-short"
        >
          terms and conditions
        </a>{" "}
        and the{" "}
        <a
          href="#"
          className="font-semibold text-primary-light hover:text-primary-red duration-short"
        >
          privacy policy
        </a>
        .
      </p>
    </div>
  );
}
export default FooterNewsletter;
