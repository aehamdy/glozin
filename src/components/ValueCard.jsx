/* eslint-disable react/prop-types */

function ValueCard({ image, heading, desc }) {
  return (
    <article className="flex flex-col items-center gap-4">
      <div className="group rounded-small overflow-hidden">
        <img
          src={image}
          alt="value image"
          className="object-cover group-hover:scale-110 duration-medium"
        />
      </div>
      <div className="space-y-1">
        <h2 className="font-semibold text-lg text-secondary-dark">{heading}</h2>
        <p className="w-11/12 mx-auto text-sm text-content-medium-dark">
          {desc}
        </p>
      </div>
    </article>
  );
}
export default ValueCard;
