/* eslint-disable react/prop-types */

function InsightCard({ item }) {
  return (
    <article className="flex flex-col gap-3">
      <div className="group rounded-small overflow-hidden">
        <img
          src={item.image}
          alt="insight image"
          className="w-full object-cover group-hover:scale-110 duration-medium"
        />
      </div>
      <div className="flex flex-col items-center">
        <h2 className="font-semibold text-lg text-secondary-dark">
          {item.heading}
        </h2>
        <p className="w-[94%] text-sm text-content-medium-dark">
          {item.description}
        </p>
      </div>
    </article>
  );
}
export default InsightCard;
