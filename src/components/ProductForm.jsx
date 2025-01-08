import Button from "./Button";
import Icon from "./Icon";

function ProductForm() {
  return (
    <div className="flex flex-col gap-5 w-full my-5 pt-8 border-t">
      <div className="flex justify-between items-center gap-3 px-1">
        <div className="flex items-center bg-[#F5F5F5] border rounded-medium overflow-hidden">
          <button
            type="button"
            className="py-2 md:py-3 px-3 md:px-4 text-xl text-primary-dark bg-transparent hover:bg-gray-200"
            aria-label="Decrease amount"
          >
            -
          </button>
          <input
            type="number"
            className="quantity-input w-12 py-2 md:py-3 bg-transparent text-primary-dark text-center focus:outline-none"
            aria-label="Item amount"
          />
          <button
            type="button"
            className="py-2 md:py-3 px-3 md:px-4 text-xl text-primary-dark bg-transparent hover:bg-gray-200"
            aria-label="Increase amount"
          >
            +
          </button>
        </div>

        <Button
          value="Add to Cart"
          className="w-1/2 py-2.5 md:py-3 px-4 font-semibold text-base lg:text-lg text-primary-light bg-secondary-dark hover:bg-primary-dark rounded-medium "
        />

        <div className="md:hidden absolute top-0 -translate-y-1/4 end-0 addtowishlist-button group md:relative p-3 md:p-4 bg-primary-light hover:bg-secondary-dark border rounded-full cursor-pointer duration-medium">
          <Icon
            name="wishlist"
            size="18"
            className="text-secondary-dark group-hover:text-primary-light group-hover:fill-secondar-dark"
          />
        </div>
        <div className="hidden md:block addtowishlist-button group md:relative p-3 md:p-4 bg-primary-light hover:bg-secondary-dark border rounded-full cursor-pointer duration-medium">
          <div className="tooltip hidden md:block absolute -top-5 group-hover:-top-7 start-0 -translate-x-1/4 w-24 py-1 text-xs text-primary-light bg-primary-dark rounded-md opacity-0 group-hover:opacity-100 z-[-1] group-hover:z-40 pointer-events-none duration-300">
            Add to wishlist
          </div>
          <Icon
            name="wishlist"
            size="18"
            className="text-secondary-dark group-hover:text-primary-light group-hover:fill-secondar-dark"
          />
        </div>
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
