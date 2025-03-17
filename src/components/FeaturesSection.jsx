import FeatureCard from "./FeatureCard";

const features = [
  {
    icon: "shipping",
    title: "Free Shipping",
    text: "Enjoy free worldwide shipping and returns, with customs and duties taxes included.",
  },
  {
    icon: "returns",
    title: "Free Returns",
    text: "Free returns within 15 days, please make sure the items are in undamaged condition.",
  },
  {
    icon: "support",
    title: "Support Online",
    text: "We support customers 24/7, send questions we will solve for you immediately.",
  },
];

function FeaturesSection() {
  return (
    <section className="flex flex-col sm:flex-row justify-between items-center gap-5 md:gap-0 mx-horizontal-spacing">
      {features.map((feature, index) => (
        <FeatureCard key={index} index={index} feature={feature} />
      ))}
    </section>
  );
}
export default FeaturesSection;
