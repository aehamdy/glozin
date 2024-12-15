/* eslint-disable react/prop-types */
import BannerMainText from "./BannerMainText";
import BannerSubText from "./BannerSubText";
import BannerText from "./BannerText";
import Button from "./Button";

function BannerContent({ content, mainTextStyle, subTextStyle }) {
  if (!content) {
    return null;
  }

  return (
    <div className="absolute top-1/2 start-1/2 -translate-y-1/2 -translate-x-1/2 flex flex-col justify-center items-center gap-5 w-full md:w-5/6 lg:w-4/6">
      <div className="flex flex-col gap-2">
        <BannerSubText subText={content.subText} className={subTextStyle} />
        <BannerMainText mainText={content.mainText} className={mainTextStyle} />
      </div>

      {content.text && <BannerText text={content.text} />}
      {content.button && (
        <Button
          value={content.button}
          className="w-fit mt-4 lg:mt-6 mx-auto py-3 md:py-3 lg:py-4 px-6 md:px-6 lg:px-14 font-semibold text-[15px] text-primary-dark hover:text-primary-light bg-primary-light hover:bg-secondary-dark rounded-medium duration-medium"
        />
      )}
    </div>
  );
}
export default BannerContent;
