/* eslint-disable react/prop-types */
import EmptyCartHeading from "./EmptyCartHeading";
import EmptyCartIcon from "./EmptyCartIcon";
import EmptyCartText from "./EmptyCartText";

function EmptyCart({ handleCloseCart }) {
  return (
    <div className="flex flex-1 justify-center">
      <div className="flex flex-col justify-center items-center gap-6">
        <EmptyCartIcon />
        <EmptyCartHeading />
        <EmptyCartText />
        <button
          type="button"
          className="py-3 px-8 md:px-12 font-medium text-xs md:text-base text-primary-light bg-secondary-dark hover:bg-primary-dark rounded-3xl duration-short"
          onClick={handleCloseCart}
        >
          Continue Shopping
        </button>
      </div>
    </div>
  );
}
export default EmptyCart;
