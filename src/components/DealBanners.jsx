import dealBanner1 from "../assets/deal-banner-1.webp";
import dealBanner2 from "../assets/deal-banner-2.webp";

const deals = [
  {
    id: 1,
    image: dealBanner1,
    text: "Today-White friday",
    mainText: "Save! 30-50%Off",
  },
  {
    id: 2,
    image: dealBanner2,
    text: "Save 30%-50% Clothing",
    mainText: "High-Top Design",
  },
];
function DealBanners() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 justify-between gap-7 mx-auto">
      {deals.map((deal, index) => (
        <div
          key={index}
          className="relative h-[413px] rounded-xl overflow-hidden cursor-pointer"
        >
          <img
            src={deal.image}
            alt=""
            className="absolute top-0 start-0 w-full"
          />
          <div className="absolute flex flex-col gap-3 top-1/2 start-1/2 -translate-y-1/2 -translate-x-1/2 text-primary-light">
            <p className="font-medium text-sm">{deal.text}</p>
            <h2 className="font-semibold text-4xl tracking-tight">
              {deal.mainText}
            </h2>
            <button className="w-fit my-6 mx-auto py-4 px-14 font-semibold text-[15px] text-primary-dark hover:text-primary-light bg-primary-light hover:bg-secondary-dark rounded-medium duration-medium">
              Shop Save
            </button>
          </div>
        </div>
      ))}
    </section>
  );
}
export default DealBanners;
