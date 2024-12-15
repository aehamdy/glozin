/* eslint-disable react/prop-types */
import BannerContent from "./BannerContent";
import BannerImage from "./BannerImage";

function SpotlightOfferBanner({ banner }) {
  return (
    <article className="group relative flex flex-col text-primary-light rounded-small overflow-hidden cursor-pointer">
      <BannerImage image={banner.image} />
      <BannerContent content={banner} />
    </article>
  );
}
export default SpotlightOfferBanner;
