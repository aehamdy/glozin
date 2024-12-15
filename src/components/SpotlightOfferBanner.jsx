/* eslint-disable react/prop-types */
import SpotlightBannerContent from "./SpotlightBannerContent";
import SpotlightBannerImage from "./SpotlightBannerImage";

function SpotlightOfferBanner({ banner }) {
  return (
    <article className="group relative w-full md:w-12/12 lg:w-full h-[210px] md:h-[155px] lg:h-[200px] text-primary-light rounded-small overflow-hidden">
      <a href="#">
        <SpotlightBannerImage image={banner.image} />
        <SpotlightBannerContent banner={banner} />
      </a>
    </article>
  );
}
export default SpotlightOfferBanner;
