import AddToCartButton from "./AddToCartButton";
import AddToWishlistButton from "./AddToWishlistButton";
import Button from "./Button";
import ProductQuantityInput from "./ProductQuantityInput";

function ProductForm() {
  return (
    <div className="flex flex-col gap-5 w-full my-5 pt-8 border-t">
      <div className="flex justify-between items-center gap-3 px-1">
        <ProductQuantityInput />

        <AddToCartButton />
        <AddToWishlistButton />
      </div>

      <div className="flex flex-col gap-4 px-1">
        <div className="flex items-cetner gap-4">
          <input type="checkbox" name="" id="" className="" />
          <p className="flex gap-1 text-sm md:text-base text-secondary-dark">
            I agree with{" "}
            <span className="font-semibold text-secondary-dark">
              Terms & Conditions
            </span>
          </p>
        </div>
        <Button
          value="Buy Now"
          className={`text-primary-light bg-red-300 py-2.5 rounded-medium`}
        />
      </div>
    </div>
  );
}
export default ProductForm;
