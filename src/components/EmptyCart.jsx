import EmptyCartHeading from "./EmptyCartHeading";
import EmptyCartIcon from "./EmptyCartIcon";
import EmptyCartText from "./EmptyCartText";

function EmptyCart() {
  return (
    <div className="flex flex-1 justify-center">
      <div className="flex flex-col justify-center items-center gap-6">
        <EmptyCartIcon />
        <EmptyCartHeading />
        <EmptyCartText />
        <button
          type="button"
          className="py-3 px-12 font-medium text-primary-light bg-secondary-dark hover:bg-primary-dark rounded-3xl duration-short"
        >
          Continue Shopping
        </button>
      </div>
    </div>
  );
}
export default EmptyCart;
