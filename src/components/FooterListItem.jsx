import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
function FooterListItem({ item }) {
  return (
    <li className="w-fit text-sm md:text-base text-secondary-light hover:text-primary-light hover:ps-3 duration-short">
      <Link to={item.link}>{item.title}</Link>
    </li>
  );
}
export default FooterListItem;
