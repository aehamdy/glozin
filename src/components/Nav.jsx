/* eslint-disable react/prop-types */
import Icon from "./Icon";
import PanelTitle from "./PanelTitle";
import NavList from "./NavList";

function Nav({ navVisibility, onClickFunction }) {
  return (
    <>
      {/* For small and medium screens */}
      <nav
        className={`lg:hidden absolute top-0 left-0 flex-col items-start w-2/3 h-full bg-primary-light z-50 rounded-tr-2xl rounded-br-2xl overflow-hidden transition-all duration-[350ms] ease-in-out transform ${
          navVisibility
            ? "translate-x-0 opacity-100"
            : "-translate-x-full opacity-0"
        }`}
        role="menu"
        aria-expanded={navVisibility}
      >
        <div className="flex flex-col">
          <div className="flex justify-between items-center py-4 px-3 bg-primary-red">
            <PanelTitle title="menu" styles="text-primary-light" />
            <Icon
              name="close"
              className="text-primary-light"
              onClickFunction={onClickFunction}
            />
          </div>

          <NavList navVisibility={navVisibility} />
        </div>
      </nav>

      {/* For large screens */}
      <nav role="menu" className="hidden lg:block">
        <NavList />
      </nav>
    </>
  );
}

export default Nav;
