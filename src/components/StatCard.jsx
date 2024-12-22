/* eslint-disable react/prop-types */

function StatCard({ title, subtitle, desc }) {
  return (
    <article>
      <h3 className="">{title}</h3>
      <h4 className="">{subtitle}</h4>
      <p className="">{desc}</p>
    </article>
  );
}
export default StatCard;
