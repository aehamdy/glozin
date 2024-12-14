import SpotlightBannerHeading from "./SpotlightBannerHeading";
import SpotlightBannerSubheading from "./SpotlightBannerSubheading";
import SpotlightBannerTextContent from "./SpotlightBannerTextContent";

/* eslint-disable react/prop-types */
function SpotlightBannerContent({ banner }) {
  return (
    <div className="flex flex-col justify-center items-center gap-5 absolute w-4/5 top-1/2 start-1/2 -translate-y-1/2 -translate-x-1/2">
      <div className="flex flex-col gap-2">
        <SpotlightBannerSubheading subheading={banner.subHeading} />
        <SpotlightBannerHeading heading={banner.heading} />
      </div>

      <SpotlightBannerTextContent text={banner.textContent} />
    </div>
  );
}
export default SpotlightBannerContent;
