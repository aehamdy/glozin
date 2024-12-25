/* eslint-disable react/prop-types */
function SectionHeader({ title, subtitle }) {
  return (
    <div
      className={`flex flex-col items-center gap-3 ${
        subtitle && "mb-8"
      } mx-horizontal-spacing`}
    >
      <h2 className="font-semibold text-3xl md:text-4xl text-secondary-dark tracking-tight">
        {title}
      </h2>
      <p className="max-w-[90%] text-content-medium-dark">{subtitle}</p>
    </div>
  );
}
export default SectionHeader;
