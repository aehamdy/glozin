import HeadlineText from "./HeadlineText";
import SectionHeader from "./SectionHeader";
import StatsWrapper from "./StatsWrapper";
import aboutusBanner from "../assets/about-us-banner.webp";

function StatsSection() {
  return (
    <div className="py-vertical-spacing px-horizontal-spacing">
      <HeadlineText text="Welcome to Glozin" />
      <SectionHeader
        title="Best Store Available to Everyone!"
        subtitle="Over 15 years of experience, we have meticulously curated collections that transcend fleeting trends, embodying a timeless elegance that resonates with our discerning clientele."
      />
      <div className="w-11/12 h-auto mx-auto rounded-small overflow-hidden">
        <img src={aboutusBanner} alt="about us image" />
      </div>
      <StatsWrapper />;
    </div>
  );
}
export default StatsSection;
