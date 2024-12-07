/* eslint-disable react/prop-types */

import NavItemBadge from "./NavItemBadge"

function NavListItem({ item }) {
  return (
    <li className="relative before:absolute before:start-0 before:bottom-0 before:h-[2px] before:w-0 hover:before:w-full before:bg-navItem-hover py-2 px-2 font-semibold text-secondary-dark hover:text-navItem-hover cursor-pointer duration-medium before:duration-medium">
        {item.label.charAt(0).toUpperCase() + item.label.slice(1).toLowerCase()}
        {item.badge && <NavItemBadge badge={item.badge} />}
    </li>
  )
}
export default NavListItem