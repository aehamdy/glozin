/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import Icon from "./Icon";

function HeaderIcons({ handleOpenCart, handleSearchOpening }) {
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
      <Link to="/wishlist">
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
