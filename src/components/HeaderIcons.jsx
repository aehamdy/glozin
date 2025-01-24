/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import Icon from "./Icon";
import { useWishlist } from "../context/wishlistContext";
import IconBadge from "./IconBadge";
import Button from "./Button";
import { useCart } from "../context/CartContext";

function HeaderIcons({ handleOpenCart, handleSearchOpening }) {
  const { wishlistProducts } = useWishlist();
  const { cartList } = useCart();

  return (
    <div className="flex gap-3 lg:gap-4">
      <Button handleClick={handleSearchOpening}>
        <Icon name="search" className="text-primary-dark hover:text-red-500" />
      </Button>
      <Button className="hidden lg:block">
        <Icon name="user" className="text-primary-dark  hover:text-red-500" />
      </Button>
      <Button className="relative hidden md:block">
        <Link to="/wishlist">
          <IconBadge value={wishlistProducts.length} />
          <Icon
            name="wishlist"
            className="text-primary-dark  hover:text-red-500"
          />
        </Link>
      </Button>
      <Button handleClick={handleOpenCart} className="relative">
        <IconBadge value={cartList.length} />
        <Icon name="cart" className="text-primary-dark hover:text-red-500" />
      </Button>
    </div>
  );
}
export default HeaderIcons;
