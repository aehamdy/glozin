/* eslint-disable react/prop-types */
function SectionHeader({ title, subtitle }) {
  return (
    <div className="flex flex-col items-center gap-3">
      <h2 className="font-bold text-4xl text-secondary-dark tracking-tight">
        {title}
      </h2>
      <p className="text-content-medium-dark">{subtitle}</p>
    </div>
  );
}
export default SectionHeader;
