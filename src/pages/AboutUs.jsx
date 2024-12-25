import VissionMessage from "../assets/VissionMessage";
import OverviewWrapper from "../assets/OverviewWrapper";
import StatsSection from "../components/StatsSection";
import ValuesSection from "../components/ValuesSection";
import InsightsSection from "../components/InsightsSection";

function AboutUs() {
  return (
    <section>
      <StatsSection />
      <ValuesSection />
      <VissionMessage />
      <OverviewWrapper />
      <InsightsSection />
    </section>
  );
}
export default AboutUs;
