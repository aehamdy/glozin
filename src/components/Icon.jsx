/* eslint-disable react/prop-types */
import { FiHeart, FiSearch, FiShoppingBag } from "react-icons/fi";
import { IoCloseOutline } from "react-icons/io5";
import { PiUser } from "react-icons/pi";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import { RxHamburgerMenu } from "react-icons/rx";

const iconMap = {
  menu: RxHamburgerMenu,
  close: IoCloseOutline,
  search: FiSearch,
  user: PiUser,
  wishlist: FiHeart,
  cart: FiShoppingBag,
  rightArrow: RiArrowRightSLine,
  leftArrow: RiArrowLeftSLine,
};

function Icon({ name, size = 20, className = "", onClickFunction }) {
  const IconComponent = iconMap[name];
  const defaultClasses = "text-secondary-dark cursor-pointer duration-medium";

  return (
    <IconComponent
      size={size}
      className={`${defaultClasses} ${className}`}
      onClick={onClickFunction}
    />
  );
}
export default Icon;
