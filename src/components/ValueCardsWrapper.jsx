import valueImage1 from "../assets/about_banner_1.webp";
import valueImage2 from "../assets/about_banner_2.webp";
import valueImage3 from "../assets/about_banner_3.webp";
import ValueCard from "./ValueCard";

const values = [
  {
    image: valueImage1,
    heading: "Cultural Standards",
    description:
      "We are committed to setting high ethical standards in production and ensuring mindful manufacturing through audits, training and education.",
  },
  {
    image: valueImage2,
    heading: "Designed to Last",
    description:
      "From traditional tailoring to the most informal pieces. Our Glozin collections feature the latest trends with the maximum comfort.",
  },
  {
    image: valueImage3,
    heading: "Freedom for Everyone",
    description:
      "The designs have been created adopting the current trends, while leaving room for personal expression among young people.",
  },
];

function ValueCardsWrapper() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
      {values.map((value, index) => (
        <ValueCard
          key={index}
          image={value.image}
          heading={value.heading}
          desc={value.description}
        />
      ))}
    </div>
  );
}
export default ValueCardsWrapper;
