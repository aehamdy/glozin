import collections from "../data/collections";
import CollectionCard from "./CollectionCard";

function CollectionsWrapper() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 md:gap-5 lg:gap-8 px-horizontal-spacing">
      {collections.map((collection, index) => (
        <CollectionCard key={index} collection={collection} />
      ))}
    </div>
  );
}
export default CollectionsWrapper;
