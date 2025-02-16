import { useCheckout } from "../context/CheckoutContext";

function Total() {
  const { total } = useCheckout();

  return (
    <div className="flex items-center gap-3">
      {/* {newTotal > 0 && newSubtotal > 0 && (
        <div className={`text-red-500`}>$ {newTotal.toFixed(2)}</div>
      )} */}
      <div
        className={`flex gap-2 ${
          // newTotal > 0 &&
          // newSubtotal &&
          // "font-medium text-base text-secondary-dark line-through"
          ""
        }`}
      >
        $ {total && total.toFixed(2)}
      </div>
    </div>
  );
}
export default Total;
