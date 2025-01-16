import navData from "../data/navData";
import NavListItem from "./NavListItem";

function NavList() {
  const renderNavItems = () => {
    return navData.map((item, index) => (
      <NavListItem key={index} item={item} />
    ));
  };

  return (
    <ul className="header-nav flex flex-col lg:flex-row lg:justify-between items-start lg:items-center lg:gap-3 divide-y lg:divide-none py-3 px-3 lg:p-0">
      {renderNavItems()}
    </ul>
  );
}
export default NavList;
