import SaleBanner from "./SaleBanner";

function SaleBannersWrapper() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 py-5 px-10">
      <SaleBanner />
      <SaleBanner />
      <SaleBanner />
      <SaleBanner />
    </div>
  );
}
export default SaleBannersWrapper;
