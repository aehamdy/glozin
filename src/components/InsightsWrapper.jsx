import InsightCard from "./InsightCard";
import insightsImage1 from "../assets/about_banner_6.webp";
import insightsImage2 from "../assets/about_banner_7.webp";
import insightsImage3 from "../assets/about_banner_8.webp";

const insights = [
  {
    image: insightsImage1,
    heading: "The Core of Us",
    description:
      "Adipisicing elit sed do eiusmod tempor labore et dolore dignissimos cumque. Excepteur sint occaecat cupidatat proident.",
  },
  {
    image: insightsImage2,
    heading: "Our Products",
    description:
      "Adipisicing elit sed do eiusmod tempor labore et dolore dignissimos cumque. Excepteur sint occaecat cupidatat proident.",
  },
  {
    image: insightsImage3,
    heading: "Our Careers",
    description:
      "Adipisicing elit sed do eiusmod tempor labore et dolore dignissimos cumque. Excepteur sint occaecat cupidatat proident.",
  },
];

function InsightsWrapper() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {insights.map((insight, index) => (
        <InsightCard key={index} item={insight} />
      ))}
    </div>
  );
}
export default InsightsWrapper;
