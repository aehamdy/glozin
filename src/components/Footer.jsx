import FooterHeading from "./FooterHeading";
import FooterInfoSection from "./FooterInfoSection";
import FooterLists from "./FooterLists";
import FooterNewsletterForm from "./FooterNewsletterForm";
import SocialIcons from "./SocialIcons";

function Footer() {
  return (
    <footer className="grid grid-cols-3 py-16 px-6 h-[70dvh] text-secondary-light bg-secondary-dark rounded-small">
      <div className="flex flex-col gap-10 ">
        <FooterInfoSection />
        <SocialIcons />
      </div>
      <FooterLists />
      <div className="flex flex-col justify-between items-start gap-10">
        <FooterHeading title="Sign Up to Newsletter" />

        <p className="w-10/12 text-start">
          Sign up for 10% off your first purchase and free shipping. Updates
          information on Sales and Offers.
        </p>

        <FooterNewsletterForm />

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
      </div>
    </footer>
  );
}
export default Footer;
