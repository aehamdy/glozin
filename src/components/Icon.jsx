/* eslint-disable react/prop-types */
import { FiCheck, FiHeart, FiSearch, FiShoppingBag } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { PiUser } from "react-icons/pi";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import { RxHamburgerMenu } from "react-icons/rx";
import { TiStarFullOutline } from "react-icons/ti";

const iconMap = {
  menu: RxHamburgerMenu,
  close: MdClose,
  search: FiSearch,
  user: PiUser,
  wishlist: FiHeart,
  cart: FiShoppingBag,
  rightArrow: RiArrowRightSLine,
  leftArrow: RiArrowLeftSLine,
  star: TiStarFullOutline,
  check: FiCheck,
};

function Icon({ name, size = 21, className = "", onClickFunction }) {
  const IconComponent = iconMap[name];
  const defaultClasses = "cursor-pointer duration-medium";

  return (
    <IconComponent
      size={size}
      className={`${defaultClasses} ${className}`}
      onClick={onClickFunction}
    />
  );
}
export default Icon;
