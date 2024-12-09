/* eslint-disable react/prop-types */
import Icon from "./Icon";
import NavHeading from "./NavHeading";
import NavList from "./NavList";

function Nav({ navVisibility, onClickFunction }) {
  return (
    <>
      {/* For small and medium screens */}
      {navVisibility && (
        <nav
          className="lg:hidden absolute top-0 start-0 flex-col items-start w-2/3 h-full bg-primary-light z-50 rounded-tr-2xl rounded-br-2xl overflow-hidden"
          role="menu"
          aria-expanded={navVisibility}
        >
          <div className="flex flex-col">
            <div className="flex justify-between items-center py-4 px-3 bg-primary-red">
              <NavHeading />
              <Icon
                name="close"
                className="hover:text-primary-light"
                onClickFunction={onClickFunction}
              />
            </div>

            <NavList />
          </div>
        </nav>
      )}

      {/* For large screens */}
      <nav role="menu" className="hidden lg:block">
        <NavList />
      </nav>
    </>
  );
}
export default Nav;
