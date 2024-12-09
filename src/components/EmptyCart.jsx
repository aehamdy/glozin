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
      </div>
    </div>
  );
}
export default EmptyCart;
