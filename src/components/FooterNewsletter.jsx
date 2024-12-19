import FooterHeading from "./FooterHeading";
import FooterNewsletterForm from "./FooterNewsletterForm";

function FooterNewsletter() {
  return (
    <div className="flex flex-col justify-between items-start gap-10">
      <FooterHeading title="Sign Up to Newsletter" />
      <p className="w-10/12 text-start">
        Sign up for <strong>10% off</strong> your first purchase and free
        shipping. Updates information on Sales and Offers.
      </p>

      <p className="w-11/12 text-start">
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
      <FooterNewsletterForm />
    </div>
  );
}
export default FooterNewsletter;
