/* eslint-disable react/prop-types */
function SectionHeading({ heading }) {
  return (
    <h2 className="font-semibold text-3xl md:text-4xl text-secondary-dark tracking-tight">
      {heading}
    </h2>
  );
}
export default SectionHeading;
