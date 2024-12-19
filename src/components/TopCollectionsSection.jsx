import SectionHeader from "./SectionHeader";
import croptopCollection from "../assets/collection-croptop.jpg";
import tshirtCollection from "../assets/collection-tshirts.jpg";
import blazerCollection from "../assets/collection-blazers.jpg";
import coatCollection from "../assets/collection-coats.jpg";
import sweaterCollection from "../assets/collection-sweaters.jpg";
import hoodieCollection from "../assets/collection-hoodies.jpg";
import TopCollectionCard from "./TopCollectionCard";

const collections = [
  {
    image: croptopCollection,
    title: "Crop-Top",
  },
  {
    image: tshirtCollection,
    title: "T-Shirts",
  },
  {
    image: blazerCollection,
    title: "Blazers",
  },
  {
    image: coatCollection,
    title: "Coats",
  },
  {
    image: sweaterCollection,
    title: "Sweaters",
  },
  {
    image: hoodieCollection,
    title: "Hoodies",
  },
];

function TopCollectionsSection() {
  return (
    <section className="flex flex-col mb-vertical-spacing mx-horizontal-spacing">
      <SectionHeader
        title="Top Collections"
        subtitle="Express your style with our standout collection—fashion meets sophistication."
      />
      <div className="flex justify-evenly items-center">
        {collections.map((collection, index) => (
          <TopCollectionCard key={index} collection={collection} />
        ))}
      </div>
    </section>
  );
}
export default TopCollectionsSection;
