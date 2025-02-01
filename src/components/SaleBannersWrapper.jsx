import discountCodes from "../data/discountCodes";
import SaleBanner from "./SaleBanner";

function SaleBannersWrapper() {
  return (
    <div className="w-full grid grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))] gap-6 md:gap-8 py-5 px-4 md:px-10">
      {discountCodes
        .filter((code) => code.active && code.viewOnApp)
        .map((code, index) => (
          <SaleBanner key={index} code={code} />
        ))}
    </div>
  );
}
export default SaleBannersWrapper;
