import SpotlightBannerHeading from "./SpotlightBannerHeading";
import SpotlightBannerSubheading from "./SpotlightBannerSubheading";
import SpotlightBannerTextContent from "./SpotlightBannerTextContent";

/* eslint-disable react/prop-types */
function SpotlightBannerContent({ banner }) {
  return (
    <div className="absolute top-1/2 start-1/2 -translate-y-1/2 -translate-x-1/2 flex flex-col justify-center items-center gap-5">
      <div className="flex flex-col gap-2">
        <SpotlightBannerSubheading subheading={banner.subHeading} />
        <SpotlightBannerHeading heading={banner.heading} />
      </div>

      <SpotlightBannerTextContent text={banner.textContent} />
    </div>
  );
}
export default SpotlightBannerContent;
