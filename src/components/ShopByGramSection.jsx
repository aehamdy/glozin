import shopGramMedia1 from "../assets/shopbygram-1.webp";
import shopGramMedia2 from "../assets/shopbygram-2.mp4";
import shopGramMedia3 from "../assets/shopbygram-3.webp";
import shopGramMedia4 from "../assets/shopbygram-4.webp";
import shopGramMedia5 from "../assets/shopbygram-5.mp4";
import shopGramMedia6 from "../assets/shopbygram-6.webp";
import ShopByGramCard from "./ShopByGramCard";

const mediaData = [
  { image: shopGramMedia1, video: "" },
  { image: "", video: shopGramMedia2 },
  { image: shopGramMedia3, video: "" },
  { image: shopGramMedia4, video: "" },
  { image: "", video: shopGramMedia5 },
  { image: shopGramMedia6, video: "" },
];

function ShopByGramSection() {
  return (
    <section className="flex w-full mb-vertical-spacing overflow-x-auto snap-x snap-mandatory">
      <div className="flex justify-evenly items-center gap-2 w-full">
        {mediaData.map((media, index) => (
          <ShopByGramCard key={index} media={media} />
        ))}
      </div>
    </section>
  );
}
export default ShopByGramSection;
