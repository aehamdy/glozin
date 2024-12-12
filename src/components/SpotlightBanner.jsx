/* eslint-disable react/prop-types */
function SpotlightBanner({ banner }) {
  return (
    <article className="relative w-full md:w-9/12 lg:w-full h-[320px] md:h-[250px] lg:h-[200px] text-primary-light rounded-small overflow-hidden">
      <a href="#">
        <div className="">
          <img src={banner.image} alt="" className="w-full h-auto" />
        </div>

        <div className="flex flex-col justify-center items-center gap-3 absolute w-4/5 top-1/2 start-1/2 -translate-y-1/2 -translate-x-1/2">
          <div className="flex flex-col gap-1">
            <h4 className="font-semibold text-sm tracking-wide">
              {banner.subHeading.toUpperCase()}
            </h4>
            <h2 className="font-bold text-3xl tracking-wider">
              {banner.heading}
            </h2>
          </div>

          <p className="tracking-wide">{banner.textContent}</p>
        </div>
      </a>
    </article>
  );
}
export default SpotlightBanner;
