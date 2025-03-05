/* eslint-disable react/prop-types */
import Icon from "./Icon";
import PanelTitle from "./PanelTitle";
import NavList from "./NavList";
import Modal from "../common/Modal";
import { useEffect, useState } from "react";

function Nav({ navVisibility, closeSideNav }) {
  const [isAnimating, setIsAnimating] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const handleClick = (e) => {
    e.stopPropagation();
  };

  useEffect(() => {
    if (navVisibility) {
      setIsVisible(true);
      setTimeout(() => setIsAnimating(true), 10);
    } else {
      setIsAnimating(false);
      setTimeout(() => setIsVisible(false), 300);
    }
  }, [navVisibility]);

  return (
    <>
      {/* For small and medium screens */}
      {isVisible ? (
        <Modal isOpen={true} onClose={closeSideNav}>
          <nav
            onClick={handleClick}
            className={`lg:hidden fixed top-0 start-0 flex-col items-start w-2/3 h-full bg-primary-light z-top rounded-r-small overflow-hidden 
              transition-transform duration-300 ease-in-out will-change-transform 
              ${isAnimating ? "translate-x-0" : "-translate-x-full"}`}
            role="menu"
            aria-expanded={navVisibility}
          >
            <div className="flex flex-col">
              <div className="flex justify-between items-center py-4 px-3 bg-primary-red">
                <PanelTitle title="menu" styles="text-primary-light" />
                <Icon
                  name="close"
                  className="text-primary-light hover:scale-110 hover:rotate-180 duration-700"
                  onClickFunction={closeSideNav}
                />
              </div>

              <NavList navVisibility={navVisibility} />
            </div>
          </nav>
        </Modal>
      ) : null}

      {/* For large screens */}
      <nav role="menu" className="hidden lg:block">
        <NavList />
      </nav>
    </>
  );
}

export default Nav;
