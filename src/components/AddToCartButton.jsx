/* eslint-disable react/prop-types */
import Button from "./Button";

function AddToCartButton({ status }) {
  return (
    <Button
      value="Add to Cart"
      disabled={status}
      className={`w-1/2 py-2.5 md:py-3 px-4 font-semibold text-base lg:text-lg text-primary-light bg-secondary-dark hover:bg-primary-dark rounded-medium`}
    />
  );
}
export default AddToCartButton;
