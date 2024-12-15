/* eslint-disable react/prop-types */
function BannerMainText({ mainText, className }) {
  return <h4 className={`font-bold ${className}`}>{mainText.toUpperCase()}</h4>;
}
export default BannerMainText;
