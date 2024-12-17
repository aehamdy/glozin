/* eslint-disable react/prop-types */
function ShopByGramCard({ media }) {
  return (
    <article className="relative w-1/2 md:w-2/6 lg:w-[200px] h-[200px] rounded-xl overflow-hidden snap-start flex-shrink-0">
      {media.image ? (
        <img
          src={media.image}
          alt="image"
          className="absolte w-full top-0 start-0 object-cover"
        />
      ) : (
        <video
          className="absolute top-0 start-0 w-full max-w-full h-full object-cover"
          loop
          muted
          autoPlay
        >
          <source src={media.video} type="video/mp4" />
        </video>
      )}
    </article>
  );
}
export default ShopByGramCard;
