/* eslint-disable react/prop-types */
function BannerImage({ image }) {
  return (
    <div className="">
      <img
        src={image}
        alt=""
        className="w-full group-hover:scale-110 z-[-1] duration-long"
      />
    </div>
  );
}
export default BannerImage;
