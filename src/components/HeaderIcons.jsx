/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import Icon from "./Icon";
import { useWishlist } from "../context/wishlistContext";

function HeaderIcons({ handleOpenCart, handleSearchOpening }) {
  const { wishlistProducts } = useWishlist();

  return (
    <div className="flex gap-4">
      <Icon
        name="search"
        className="text-primary-dark hover:text-red-500"
        onClickFunction={handleSearchOpening}
      />
      <Icon
        name="user"
        className="hidden lg:block text-primary-dark  hover:text-red-500"
      />
      <Link to="/wishlist" className="relative">
        <div className="absolute top-2 end-2 p-1 -translate-y-full translate-x-full flex justify-center items-center w-4 h-4 text-xs text-primary-light bg-red-500 rounded-full">
          {wishlistProducts.length}
        </div>
        <Icon
          name="wishlist"
          className="hidden lg:block text-primary-dark  hover:text-red-500"
        />
      </Link>
      <Icon
        name="cart"
        className="text-primary-dark hover:text-red-500"
        onClickFunction={handleOpenCart}
      />
    </div>
  );
}
export default HeaderIcons;
