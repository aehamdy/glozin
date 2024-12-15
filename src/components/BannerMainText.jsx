/* eslint-disable react/prop-types */
function BannerMainText({ subheading }) {
  return (
    <h4 className="font-semibold text-xs lg:text-sm tracking-wide">
      {subheading.toUpperCase()}
    </h4>
  );
}
export default BannerMainText;
