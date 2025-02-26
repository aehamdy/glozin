import overviewImage1 from "../assets/about_banner_4.webp";
import overviewImage2 from "../assets/about_banner_5.webp";
import OverviewCard from "./OverviewCard";

const overviews = [
  {
    image: overviewImage1,
    heading: "Our Factories",
    subheading: "The Best Product",
    description:
      "We spend a lot of time finding the best factories around the world—the same factories that make your favorite designer brands. We visit them regularly and build strong personal relationships with the owners. Each factory is audited for compliance to assess factors such as fair wages.",
    buttonText: "Learn More",
  },
  {
    image: overviewImage2,
    heading: "Our Products",
    subheading: "Timeless Products",
    description:
      "At Glozin, we’re not big on trends. We want you to wear our pieces for years, even decades, to come. That’s why we source the finest materials and factories for our timeless products— like our Grade-A cashmere sweaters, Italian shoes, and Peruvian Pima tees.",
    buttonText: "Learn More",
  },
];

function OverviewWrapper() {
  return (
    <div className="flex flex-col gap-14 mx-[1.5rem] lg:mx-vertical-spacing py-10 md:py-vertical-spacing ">
      {overviews.map((overview, index) => (
        <OverviewCard key={index} item={overview} index={index} />
      ))}
    </div>
  );
}
export default OverviewWrapper;
