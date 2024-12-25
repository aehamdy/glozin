import HeadlineText from "../components/HeadlineText";
import SectionHeader from "../components/SectionHeader";
import ValueCardsWrapper from "../components/ValueCardsWrapper";
import VissionMessage from "../assets/VissionMessage";
import OverviewWrapper from "../assets/OverviewWrapper";
import InsightsWrapper from "../components/InsightsWrapper";
import StatsSection from "../components/StatsSection";

function AboutUs() {
  return (
    <section className="text-secondary-dark">
      {/* <div className="">
        <HeadlineText text="Welcome to Glozin" />
        <SectionHeader
          title="Best Store Available to Everyone!"
          subtitle="Over 15 years of experience, we have meticulously curated collections that transcend fleeting trends, embodying a timeless elegance that resonates with our discerning clientele."
        />
        <div className="w-11/12 h-auto mx-auto rounded-small overflow-hidden">
          <img src={aboutusBanner} alt="about us image" />
        </div>
        <StatsWrapper />
      </div> */}
      <StatsSection />

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

      <div className="border-t border-primary-border">
        <HeadlineText text="How We Work" />
        <SectionHeader
          title="Expanding Horizons"
          subtitle="At Glozin, our work culture is deeply rooted in collaboration, innovation and passion. We believe that a positive and
                    inclusive work environment is the foundation for creativity and success."
        />
        <InsightsWrapper />
      </div>
    </section>
  );
}
export default AboutUs;
