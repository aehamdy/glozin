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
    <div className="flex gap-4">
      <Button handleClick={handleSearchOpening}>
        <Icon name="search" className="text-primary-dark hover:text-red-500" />
      </Button>
      <Button className="hidden lg:block">
        <Icon name="user" className="text-primary-dark  hover:text-red-500" />
      </Button>
      <Button>
        <Link to="/wishlist" className="relative">
          <IconBadge value={wishlistProducts.length} />
          <Icon
            name="wishlist"
            className="hidden lg:block text-primary-dark  hover:text-red-500"
          />
        </Link>
      </Button>
      <Button className="relative">
        <IconBadge value={cartList.length} />
        <Icon
          name="cart"
          className="text-primary-dark hover:text-red-500"
          onClickFunction={handleOpenCart}
        />
      </Button>
    </div>
  );
}
export default HeaderIcons;
