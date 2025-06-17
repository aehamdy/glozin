import { deals } from "../data/dealBanners";
import DealBanner from "./DealBanner";

function DealBannersSection() {
  return (
    <section className="mb-vertical-spacing mx-horizontal-spacing">
      <div className="grid gridcols-1 md:grid-cols-2 justify-between gap-7">
        {deals.map((deal, index) => (
          <DealBanner key={deal.id} index={index} deal={deal} />
        ))}
      </div>
    </section>
  );
}
export default DealBannersSection;
