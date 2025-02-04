/* eslint-disable react/prop-types */
function Total({ total, newTotal }) {
  return (
    <div className="flex items-center gap-3">
      {/* {newTotal > 0 && (
        <div className="flex gap-5 text-red-500">$ {newTotal.toFixed(2)}</div>
      )} */}
      <div
        className={`flex gap-2 ${
          newTotal && "font-medium text-base text-secondary-dark line-through"
        }`}
      >
        $ {total.toFixed(2)}
      </div>
      {/* {console.log(newTotal)} */}
    </div>
  );
}
export default Total;
