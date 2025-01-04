import HeadlineText from "./HeadlineText";
import InsightsWrapper from "./InsightsWrapper";
import SectionHeader from "./SectionHeader";

function InsightsSection() {
  return (
    <div className="mx-horizontal-spacing pt-10 md:py-vertical-spacing border-t border-primary-border">
      <HeadlineText text="How We Work" />
      <SectionHeader
        heading="Expanding Horizons"
        desc="At Glozin, our work culture is deeply rooted in collaboration, innovation and passion. We believe that a positive and
                inclusive work environment is the foundation for creativity and success."
      />
      <InsightsWrapper />
    </div>
  );
}
export default InsightsSection;
