import Icon from "./Icon";

function AddToWishlistButton() {
  return (
    <>
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
    </>
  );
}
export default AddToWishlistButton;
