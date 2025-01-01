/* eslint-disable react/prop-types */
export default function CollectionCard({ collection }) {
  return (
    <article className="group relative rounded-tiny hover:shadow-xl overflow-hidden duration-300 cursor-pointer">
      <img
        src={collection.image}
        alt={`${collection.name}'s Picture`}
        className="w-full h-full top-0 start-0"
      />
      <div className="absolute w-fit start-1/2 bottom-8 -translate-x-1/2 py-3 px-8 font-semibold text-lg uppercase text-primary-dark group-hover:text-primary-light bg-primary-light group-hover:bg-secondary-dark rounded-tiny duration-300">
        {collection.name}
      </div>
    </article>
  );
}
