import StatCard from "./StatCard";

const stats = [
  {
    title: "53 K",
    subtitle: "Products for Sale",
    description:
      "That's why we strive to offer a diverse range of products that cater to all styles.",
  },
  {
    title: "8.5 K",
    subtitle: "Happy Customer",
    description:
      "We pride ourselves on creating great products and experiences with our valued customers.",
  },
  {
    title: "13 K",
    subtitle: "Partner Brand",
    description:
      "Partner with brands that share our values, striving to protect our environment.",
  },
];

function StatsWrapper() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 mt-12">
      {stats.map((stat, index) => (
        <StatCard
          key={index}
          index={index}
          title={stat.title}
          subtitle={stat.subtitle}
          desc={stat.description}
        />
      ))}
    </div>
  );
}
export default StatsWrapper;
