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

function TopCollectionCardsWrapper() {
  return (
    <div className="flex justify-evenly items-center">
      {collections.map((collection, index) => (
        <TopCollectionCard key={index} collection={collection} />
      ))}
    </div>
  );
}
export default TopCollectionCardsWrapper;
