/* eslint-disable react/prop-types */
import navData from "../data/navData";
import Icon from "./Icon";
import NavListItem from "./NavListItem";

function NavList({ navVisibility, onClickFunction }) {
  const renderNavItems = () => {
    return navData.map((item, index) => <NavListItem key={index} item={item} />);
  };

  return (
    <>
      {/* For small and medium screens */}
      {navVisibility && (
        <nav
          className="lg:hidden absolute top-0 start-0 flex-col items-start w-2/3 h-full bg-primary-light z-50 rounded-tr-2xl rounded-br-2xl overflow-hidden"
          role="menu"
          aria-expanded={navVisibility}
        >
          <div className="">
            <h4 className="px-3 font-semibold flex justify-between items-center py-4 text-primary-light bg-primary-red">
              Menu
              <Icon
                name="close"
                className="text-primary-light"
                onClickFunction={onClickFunction}
              />
            </h4>
            <ul className="flex flex-col items-start divide-y py-3 px-3">
              {renderNavItems()}
            </ul>
          </div>
        </nav>
      )}

      {/* For large screens */}
      <nav role="menu" className="hidden lg:block">
        <ul className="lg:flex lg:flex-row lg:justify-between lg:items-center lg:gap-3">
          {renderNavItems()}
        </ul>
      </nav>
    </>
  );
}
export default NavList;
