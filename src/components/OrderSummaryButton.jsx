/* eslint-disable react/prop-types */
import Icon from "./Icon";
import Total from "./Total";

function OrderSummaryButton({ summary, handleSummary, shippingFees }) {
  return (
    <div className="lg:hidden flex justify-between -mt-1 lg:mt-0 py-4 px-5 bg-cloud-gray border">
      <button type="button" onClick={handleSummary}>
        <div className="flex items-center gap-3 text-sm text-blue-800 cursor-pointer">
          <span>Order Summary</span>
          {summary ? (
            <Icon name="upChevronArrow" size="14" />
          ) : (
            <Icon name="downChevronArrow" size="14" />
          )}
        </div>
      </button>

      <Total shippingFees={shippingFees} />
    </div>
  );
}
export default OrderSummaryButton;
