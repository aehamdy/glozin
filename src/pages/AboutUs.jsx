import StatsSection from "../components/StatsSection";
import ValuesSection from "../components/ValuesSection";
import InsightsSection from "../components/InsightsSection";
import VissionMessage from "../components/VissionMessage";
import OverviewWrapper from "../components/OverviewWrapper";

function AboutUs() {
  return (
    <section className="overflow-hidden">
      <StatsSection />
      <ValuesSection />
      <VissionMessage />
      <OverviewWrapper />
      <InsightsSection />
    </section>
  );
}
export default AboutUs;
