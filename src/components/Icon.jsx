/* eslint-disable react/prop-types */
import { CiHeart, CiSearch } from "react-icons/ci"
import { IoCloseOutline } from "react-icons/io5";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { PiUser } from "react-icons/pi"
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import { RxHamburgerMenu } from "react-icons/rx";

const iconMap = {
  menu: RxHamburgerMenu,
  close: IoCloseOutline,
  search: CiSearch,
  user: PiUser,
  wishlist: CiHeart,
  cart: LiaShoppingBagSolid,
  rightArrow: RiArrowRightSLine,
  leftArrow: RiArrowLeftSLine,
}

function Icon({ name, size = 24, className="", onClickFunction }) {

  const IconComponent = iconMap[name];
  const defaultClasses = "text-secondary-dark cursor-pointer duration-medium";

  return <IconComponent size={size} className={`${defaultClasses} ${className}`} onClick={onClickFunction} />
}
export default Icon