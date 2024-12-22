import HeadlineText from "../components/HeadlineText";
import SectionHeader from "../components/SectionHeader";

import aboutusBanner from "../assets/about-us-banner.webp";
import StatsWrapper from "../components/StatsWrapper";
import ValueCardsWrapper from "../components/ValueCardsWrapper";
import VissionMessage from "../assets/VissionMessage";
import OverviewWrapper from "../assets/OverviewWrapper";

function AboutUs() {
  return (
    <section className="text-secondary-dark">
      <div className="">
        <HeadlineText text="Welcome to Glozin" />
        <SectionHeader
          title="Best Store Available to Everyone!"
          subtitle="Over 15 years of experience, we have meticulously curated collections that transcend fleeting trends, embodying a timeless elegance that resonates with our discerning clientele."
        />
        <div className="w-11/12 h-auto mx-auto rounded-small overflow-hidden">
          <img src={aboutusBanner} alt="about us image" />
        </div>
        <StatsWrapper />
      </div>

      <div className="border-t border-primary-border">
        <HeadlineText text="Why Choose Us" />
        <SectionHeader
          title="Our Peculiar Things"
          subtitle="Our fashion products are characterized by innovative and on—trend designs. We pride ourselves in pushing the boundaries of conventional fashion, delivering new, bold and captivating styles."
        />
        <ValueCardsWrapper />
      </div>

      <VissionMessage />

      <OverviewWrapper />
    </section>
  );
}
export default AboutUs;
