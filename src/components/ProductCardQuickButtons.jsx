/* eslint-disable react/prop-types */
import AddToWishlistButton from "./AddToWishlistButton";
import Button from "./Button";
import Icon from "./Icon";

function ProductCardQuickButtons({ productId }) {
  return (
    <div className="absolute top-0 start-0 w-full h-full z-[-1] group-hover:z-50">
      <div className="relative w-full h-full">
        <div className="absolute top-5 end-5 lg:-end-8 group-hover:end-5 flex flex-col gap-4 lg:opacity-0 lg:group-hover:opacity-100 transition-all duration-medium">
          <AddToWishlistButton productId={productId} />
          <button>
            <Icon name="cart" className="" />
          </button>
        </div>

        <Button
          value="Add to Cart"
          className="hidden lg:block absolute bottom-0 group-hover:bottom-[23%] start-1/2 -translate-x-1/2 w-3/5 py-2 text-lg text-primary-light bg-secondary-dark hover:bg-red-500 rounded-medium opacity-0 group-hover:opacity-100 transition-all ease-in-out duration-medium"
        />
      </div>
    </div>
  );
}
export default ProductCardQuickButtons;
