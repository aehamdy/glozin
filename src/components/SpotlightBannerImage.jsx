/* eslint-disable react/prop-types */
function SpotlightBannerImage({ image }) {
  return (
    <div className="">
      <img
        src={image}
        alt=""
        className="w-full h-auto group-hover:scale-110 duration-long"
      />
    </div>
  );
}
export default SpotlightBannerImage;
