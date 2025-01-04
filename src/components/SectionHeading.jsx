/* eslint-disable react/prop-types */
function SectionHeading({ content }) {
  return (
    <h2 className="font-semibold text-3xl md:text-4xl text-secondary-dark tracking-tight">
      {content}
    </h2>
  );
}
export default SectionHeading;
