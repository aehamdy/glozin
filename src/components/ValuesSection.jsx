import HeadlineText from "./HeadlineText";
import SectionHeader from "./SectionHeader";
import ValueCardsWrapper from "./ValueCardsWrapper";

function ValuesSection() {
  return (
    <div className="mx-horizontal-spacing py-10 md:py-vertical-spacing border-t border-primary-border">
      <HeadlineText text="Why Choose Us" />
      <SectionHeader
        heading="Our Peculiar Things"
        desc="Our fashion products are characterized by innovative and on—trend designs. We pride ourselves in pushing the boundaries of conventional fashion, delivering new, bold and captivating styles."
      />
      <ValueCardsWrapper />
    </div>
  );
}
export default ValuesSection;
