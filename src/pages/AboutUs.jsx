import HeadlineText from "../components/HeadlineText";
import SectionHeader from "../components/SectionHeader";

import aboutusBanner from "../assets/about-us-banner.webp";

function AboutUs() {
  return (
    <section className="text-secondary-dark">
      <div className="">
        <HeadlineText text="Welcome to Glozin" />
        <SectionHeader
          title="Best Store Available to Everyone!"
          subtitle="Over 15 years of experience, we have meticulously curated collections that transcend fleeting trends, embodying a timeless elegance that resonates with our discerning clientele."
        />
        <div className="">
          <img src={aboutusBanner} alt="about us image" />
        </div>
      </div>
    </section>
  );
}
export default AboutUs;
