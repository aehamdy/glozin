/* eslint-disable react/prop-types */
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { BiStoreAlt } from "react-icons/bi";
import { FaPinterestP, FaTiktok, FaYoutube } from "react-icons/fa";
import { FaFacebookF, FaInstagram, FaTruckFast } from "react-icons/fa6";
import { FiCheck, FiHeart, FiSearch, FiShoppingBag } from "react-icons/fi";
import { GoTrash } from "react-icons/go";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { IoEyeOutline } from "react-icons/io5";
import { MdClose } from "react-icons/md";
import { PiPackage, PiUser } from "react-icons/pi";
import {
  RiArrowLeftSLine,
  RiArrowRightSLine,
  RiErrorWarningLine,
} from "react-icons/ri";
import { RxHamburgerMenu } from "react-icons/rx";
import { TiStarFullOutline, TiStarOutline } from "react-icons/ti";

const iconMap = {
  menu: RxHamburgerMenu,
  close: MdClose,
  trash: GoTrash,
  search: FiSearch,
  user: PiUser,
  wishlist: FiHeart,
  cart: FiShoppingBag,
  rightArrow: RiArrowRightSLine,
  leftArrow: RiArrowLeftSLine,
  upChevronArrow: IoIosArrowUp,
  downChevronArrow: IoIosArrowDown,
  filledStar: TiStarFullOutline,
  outlineStar: TiStarOutline,
  warning: RiErrorWarningLine,
  check: FiCheck,
  plus: AiOutlinePlus,
  minus: AiOutlineMinus,
  deliveryTruck: FaTruckFast,
  store: BiStoreAlt,
  package: PiPackage,
  eye: IoEyeOutline,
  facebook: FaFacebookF,
  instagram: FaInstagram,
  tiktok: FaTiktok,
  youtube: FaYoutube,
  pinterest: FaPinterestP,
};

function Icon({ name, size = 21, className = "", onClickFunction }) {
  const IconComponent = iconMap[name];
  const defaultClasses = "cursor-pointer duration-short";

  if (!IconComponent) {
    console.warn(
      `Icon "${name}" is not defined in iconMap. Check your name prop or iconMap.`
    );
    return null;
  }

  return (
    <IconComponent
      size={size}
      className={`${defaultClasses} ${className}`}
      onClick={onClickFunction}
    />
  );
}
export default Icon;
