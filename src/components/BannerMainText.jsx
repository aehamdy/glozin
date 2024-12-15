/* eslint-disable react/prop-types */
function BannerMainText({ mainText }) {
  return (
    <h4 className="font-bold text-4xl md:text-3xl lg:text-4xl">
      {mainText.toUpperCase()}
    </h4>
  );
}
export default BannerMainText;
