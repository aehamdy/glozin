/* eslint-disable react/prop-types */
import BannerContent from "./BannerContent";
import SpotlightBannerImage from "./SpotlightBannerImage";

function SpotlightOfferBanner({ banner }) {
  return (
    <article className="group relative flex flex-col text-primary-light rounded-small overflow-hidden cursor-pointer">
      <SpotlightBannerImage image={banner.image} />
      <BannerContent banner={banner} />
    </article>
  );
}
export default SpotlightOfferBanner;
