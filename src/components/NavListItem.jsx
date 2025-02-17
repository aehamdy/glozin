/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import NavItemBadge from "./NavItemBadge";

function NavListItem({ item }) {
  return (
    <>
      <Link
        to={item.url}
        className={`relative before:absolute before:start-0 before:bottom-0 before:h-[2px] before:w-0 
          lg:hover:before:w-full before:bg-secondary-red flex justify-between w-full py-4 lg:py-2 lg:px-2 font-semibold 
        ${
          item.label.toLowerCase() === "sale" ||
          item.label.toLowerCase() === "clearance"
            ? "text-primary-red hover:text-secondary-red"
            : "text-secondary-dark hover:text-secondary-red"
        } lg:border-none duration-medium before:duration-medium`}
      >
        <li className="flex relative">
          {item.label.charAt(0).toUpperCase() +
            item.label.slice(1).toLowerCase()}
          {item.badge && <NavItemBadge badgeText={item.badge} />}
        </li>
      </Link>
    </>
  );
}
export default NavListItem;
