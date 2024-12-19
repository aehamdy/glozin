import dealBanner1 from "../assets/deal-banner-1.webp";
import dealBanner2 from "../assets/deal-banner-2.webp";
import BannerContent from "./BannerContent";
import BannerImage from "./BannerImage";
import SectionHeader from "./SectionHeader";

const deals = [
  {
    id: 1,
    image: dealBanner1,
    mainText: "Save! 30-50%Off",
    subText: "Today-White friday",
    button: "Shop Save",
  },
  {
    id: 2,
    image: dealBanner2,
    mainText: "High-Top Design",
    subText: "Save 30%-50% Clothing",
    button: "Shop Save",
  },
];
function DealBannersSection() {
  return (
    <section className="mb-vertical-spacing mx-horizontal-spacing">
      <SectionHeader
        title="Top Collections"
        subtitle="Express your style with our standout collection—fashion meets sophistication."
      />
      <div className="grid gridcols-1 md:grid-cols-2 justify-between gap-7">
        {deals.map((deal, index) => (
          <div
            key={index}
            className="relative flex flex-col rounded-xl overflow-hidden cursor-pointer"
          >
            <BannerImage image={deal.image} />
            <BannerContent
              content={deal}
              mainTextStyle="text-3xl md:text-3xl lg:text-2xl"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
export default DealBannersSection;
