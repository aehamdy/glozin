import FREE_SHIPPING_THRESHOLD from "../config/freeShippingThreshold";
import Icon from "./Icon";

function ProductDeliveryShippingDetails() {
  return (
    <div className="deliver-shipping-details flex flex-col md:flex-row justify-around items-center gap-6 md:gap-3 w-full my-6 md:my-10 py-5 px-6 text-sm md:text-base text-content-medium-dark border rounded-tiny">
      <div className="flex flex-col items-center gap-2">
        <Icon
          name="deliveryTruck"
          className="text-content-medium-dark"
          size="26"
        />
        <div>
          <p className="mb-1">Estimate delivery times: </p>
          <span className="font-semibold text-secondary-dark">
            3-5 days international.
          </span>
        </div>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Icon name="package" className="text-content-medium-dark" size="26" />
        <div>
          <p className="mb-1">Free shipping & returns: </p>
          <span className="font-semibold text-secondary-dark">
            {`On all orders over $${FREE_SHIPPING_THRESHOLD}`}
          </span>
        </div>
      </div>
    </div>
  );
}
export default ProductDeliveryShippingDetails;
