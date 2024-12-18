import FooterInfoSection from "./FooterInfoSection";
import SocialIcons from "./SocialIcons";

function Footer() {
  return (
    <footer className="grid grid-cols-3 py-8 px-6 h-[90dvh] text-secondary-light bg-secondary-dark rounded-small">
      <div className="flex flex-col gap-10">
        <FooterInfoSection />
        <SocialIcons />
      </div>
    </footer>
  );
}
export default Footer;
