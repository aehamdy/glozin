/* eslint-disable react/prop-types */
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import NavItemBadge from "./NavItemBadge";

const divVariants = {
  hidden: { x: 0 },
  visible: { x: 40, transition: { duration: 0.2 } },
};

function NavListItem({ item }) {
  const capitalizedLabel =
    item.label.charAt(0).toUpperCase() + item.label.slice(1).toLowerCase();

  const isSaleCategory =
    item.label.toLowerCase() === "sale" ||
    item.label.toLowerCase() === "clearance";

  return (
    <li className="flex w-full">
      <motion.div
        className="w-full"
        variants={divVariants}
        initial="hidden"
        whileHover="visible"
      >
        <Link
          to={item.url}
          className={`relative before:absolute before:start-0 before:bottom-0 before:h-[2px] before:w-0
        lg:hover:before:w-full before:bg-secondary-red flex items-center gap-5 lg:gap-0 w-full lg:p-2 font-semibold py-4 lg:py-1
      ${
        isSaleCategory
          ? "text-primary-red hover:text-secondary-red"
          : "text-secondary-dark hover:text-secondary-red"
      } lg:border-none duration-medium before:duration-medium`}
        >
          <div className="">{capitalizedLabel}</div>
          {item.badge && <NavItemBadge badgeText={item.badge} />}
        </Link>
      </motion.div>
    </li>
  );
}
export default NavListItem;
