/* eslint-disable react/prop-types */

function StatCard({ title, subtitle, desc }) {
  return (
    <article className="flex flex-col items-center gap-2">
      <h3 className="font-semibold text-3xl text-secondary-dark">{title}</h3>
      <h4 className="font-semibold text-xl text-secondary-dark">{subtitle}</h4>
      <p className="w-[80%] text-content-medium-dark">{desc}</p>
    </article>
  );
}
export default StatCard;
