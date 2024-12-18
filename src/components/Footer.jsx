import FooterInfoSection from "./FooterInfoSection";
import FooterLists from "./FooterLists";
import FooterNewsletter from "./FooterNewsletter";
import SocialIcons from "./SocialIcons";

function Footer() {
  return (
    <footer className="grid grid-cols-3 py-16 px-6 h-[70dvh] text-secondary-light bg-secondary-dark rounded-small">
      <div className="flex flex-col gap-10 ">
        <FooterInfoSection />
        <SocialIcons />
      </div>
      <FooterLists />
      <FooterNewsletter />
    </footer>
  );
}
export default Footer;
