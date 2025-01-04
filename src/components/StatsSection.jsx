import HeadlineText from "./HeadlineText";
import SectionHeader from "./SectionHeader";
import StatsWrapper from "./StatsWrapper";
import aboutusBanner from "../assets/about-us-banner.webp";

function StatsSection() {
  return (
    <div className="py-10 md:py-vertical-spacing px-horizontal-spacing">
      <HeadlineText text="Welcome to Glozin" />
      <SectionHeader heading="Best Store" />
      <SectionHeader
        heading="Available to Everyone!"
        desc="Over 15 years of experience, we have meticulously curated collections that transcend fleeting trends, embodying a timeless elegance that resonates with our discerning clientele."
      />
      <div className="w-full mx-auto rounded-small overflow-hidden">
        <img
          src={aboutusBanner}
          alt="about us image"
          className="w-full object-cover"
        />
      </div>
      <StatsWrapper />
    </div>
  );
}
export default StatsSection;
