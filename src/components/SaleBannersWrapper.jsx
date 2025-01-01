import saleBanners from "../data/saleBanners";
import SaleBanner from "./SaleBanner";

function SaleBannersWrapper() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-8 py-5 px-4 md:px-10">
      {saleBanners.map((banner, index) => (
        <SaleBanner key={index} banner={banner} />
      ))}
    </div>
  );
}
export default SaleBannersWrapper;
