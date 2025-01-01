/* eslint-disable react/prop-types */
export default function CollectionCard({ collection }) {
  return (
    <article className="group relative rounded-tiny hover:shadow-xl overflow-hidden duration-medium cursor-pointer">
      <img
        src={collection.image}
        alt={`${collection.name}'s Picture`}
        className="w-full h-full top-0 start-0"
      />
      <div className="absolute w-8/12 start-1/2 bottom-4 lg:bottom-8 -translate-x-1/2 py-2.5 md:py-4 lg:py-3 px-3 md:px-6 lg:px-8 font-semibold text-primary-dark group-hover:text-primary-light bg-primary-light group-hover:bg-secondary-dark rounded-medium duration-medium">
        {collection.name}
      </div>
    </article>
  );
}
