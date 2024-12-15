import BannerSubtext from "./BannerSubtext";
import BannerMainText from "./BannerMainText";
import BannerText from "./BannerText";

/* eslint-disable react/prop-types */
function BannerContent({ banner }) {
  return (
    <div className="absolute top-1/2 start-1/2 -translate-y-1/2 -translate-x-1/2 flex flex-col justify-center items-center gap-5 w-1/2 md:w-4/5 lg:w-4/6">
      <div className="flex flex-col gap-2">
        <BannerMainText subheading={banner.subHeading} />
        <BannerSubtext heading={banner.heading} />
      </div>

      <BannerText text={banner.textContent} />
    </div>
  );
}
export default BannerContent;
