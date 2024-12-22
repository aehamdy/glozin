/* eslint-disable react/prop-types */

function ValueCard({ image, heading, desc }) {
  return (
    <article className="flex flex-col items-center gap-4">
      <div className="">
        <img src={image} alt="value image" />
      </div>
      <h2 className="">{heading}</h2>
      <p className="">{desc}</p>
    </article>
  );
}
export default ValueCard;
