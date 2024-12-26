/* eslint-disable react/prop-types */
import Button from "./Button";

function StoreCard({ store }) {
  return (
    <article className="flex flex-col gap-4">
      <div className="group rounded-small overflow-hidden">
        <img
          src={store.image}
          alt="store image"
          className="w-full object-cover group-hover:scale-110 duration-medium"
        />
      </div>

      <div className="space-y-4 text-content-medium-dark text-start">
        <h2 className="font-semibold text-xl text-secondary-dark">
          {store.heading}
        </h2>

        <div className="space-y-1">
          <p>{store.address}</p>
          <p>{store.phone}</p>
          <p>{store.email}</p>
        </div>

        <div>
          <p>{store.times.first}</p>
          <p>{store.times.second}</p>
        </div>
      </div>

      <Button
        value="Get Directions"
        className="w-fit py-2.5 px-5 font-medium text-content-medium-dark hover:text-primary-light hover:bg-primary-dark border border-[#c0c0c0] rounded-3xl duration-medium"
      />
    </article>
  );
}
export default StoreCard;
