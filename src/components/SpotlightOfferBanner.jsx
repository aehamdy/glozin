/* eslint-disable react/prop-types */
import SpotlightBannerContent from "./SpotlightBannerContent";

function SpotlightOfferBanner({ banner }) {
  return (
    <article className="relative w-full md:w-9/12 lg:w-full h-[210px] md:h-[250px] lg:h-[200px] text-primary-light rounded-small overflow-hidden">
      <a href="#">
        <div className="">
          <img src={banner.image} alt="" className="w-full h-auto" />
        </div>
        <SpotlightBannerContent banner={banner} />
      </a>
    </article>
  );
}
export default SpotlightOfferBanner;
