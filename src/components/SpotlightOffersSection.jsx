import { spotlightBanners } from "../data/spotlightBanners";
import SpotlightOfferBanner from "./SpotlightOfferBanner";

function SpotlightOffersSection() {
  return (
    <section className="grid grid-col-1 md:grid-cols-3 justify-items-center gap-4 lg:gap-8 mb-vertical-spacing mx-horizontal-spacing">
      {spotlightBanners.map((banner, index) => (
        <SpotlightOfferBanner key={banner.id} index={index} banner={banner} />
      ))}
    </section>
  );
}
export default SpotlightOffersSection;
