/* eslint-disable react/prop-types */

import NavItemBadge from "./NavItemBadge"

function NavListItem({ item }) {
  return (
    <li className="relative before:absolute before:start-0 before:bottom-0 before:h-[2px] before:w-0 lg:hover:before:w-full before:bg-secondary-red flex justify-between w-full py-4 lg:py-2 lg:px-2 font-semibold text-secondary-dark hover:text-secondary-red lg:border-none cursor-pointer duration-medium before:duration-medium">
        <div className="flex relative">
            {item.label.charAt(0).toUpperCase() + item.label.slice(1).toLowerCase()}
            {item.badge && <NavItemBadge badgeText={item.badge} />}
        </div>
    </li>
  )
}
export default NavListItem