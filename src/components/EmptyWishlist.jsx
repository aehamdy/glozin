import { Link } from "react-router-dom";

function EmptyWishlist() {
  return (
    <div className="flex flex-col items-center gap-8 lg:gap-10 w-fit mt-16 lg:mt-20 mx-auto text-md text-content-light-dark">
      <h3 className="w-3/4 md:w-full">
        No products were added to the wishlist page.
      </h3>
      <Link
        to="/shop"
        className="py-3 w-1/2 md:w-3/5 font-medium text-primary-light bg-secondary-dark hover:bg-primary-dark rounded-3xl duration-short"
      >
        Back to shopping
      </Link>
    </div>
  );
}
export default EmptyWishlist;
