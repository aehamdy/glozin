/* eslint-disable react/prop-types */
import AddToWishlistButton from "./AddToWishlistButton";
import Button from "./Button";
import Icon from "./Icon";

function ProductCardQuickButtons({ productId }) {
  return (
    <div className="absolute top-0 start-0 w-full h-full">
      <div className="relative w-full h-full">
        <div className="absolute top-5 -end-8 group-hover:end-5 flex flex-col gap-4 opacity-0 group-hover:opacity-100 transition-all duration-medium">
          {/* <button
            className={`group absolute md:relative top-0 -translate-y-1/4 md:-translate-y-0 end-0 p-3 md:p-4 text-primary-dark hover:text-white bg-slate-50 hover:bg-secondary-dark rounded-full cursor-pointer duration-medium`}
          >
            <Icon name="wishlist" size="18" />
          </button> */}
          <AddToWishlistButton productId={productId} />
        </div>

        <Button
          value="Add to Cart"
          className="absolute -bottom-8 group-hover:bottom-5 start-1/2 -translate-x-1/2 w-3/5 py-2.5 text-lg text-primary-light bg-secondary-dark hover:bg-primary-dark rounded-medium opacity-0 group-hover:opacity-100 transition-all ease-in-out duration-medium"
        />
      </div>
    </div>
  );
}
export default ProductCardQuickButtons;
