/* eslint-disable react/prop-types */
function TopCollectionCard({ collection }) {
  return (
    <article className="group w-[160px] h-[160px]overflow-hidden">
      <a href="#" className=" flex flex-col justify-center items-center gap-3 ">
        <div className="rounded-full overflow-hidden">
          <img
            src={collection.image}
            alt="collection image"
            className="w-full object-cover group-hover:scale-110 duration-medium"
          />
        </div>
        <span className="font-semibold text-secondary-dark">
          {collection.title}
        </span>
      </a>
    </article>
  );
}
export default TopCollectionCard;
