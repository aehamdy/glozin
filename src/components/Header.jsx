/* eslint-disable react/prop-types */
import { useState } from "react";
import AnnouncementBar from "./AnnouncementBar";
import HeaderIcons from "./HeaderIcons";
import Logo from "./Logo";
import Nav from "./Nav";
import Icon from "./Icon";
import SearchWindow from "./SearchWindow";

function Header({ handleOpenCart }) {
  const [barVisibility, setBarVisibility] = useState(true);
  const [navVisibility, setNavVisibility] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const hideAnnouncementBar = () => {
    setBarVisibility(false);
  };

  const displaySideNav = () => {
    setNavVisibility(true);
  };

  const closeSideNav = () => {
    setNavVisibility(false);
  };

  const openSearchWindow = () => {
    setIsSearchOpen(true);
  };

  const closeSearchWindow = () => {
    setIsSearchOpen(false);
  };

  return (
    <header
      className={`flex justify-between items-center ${
        barVisibility && "mt-[32px]"
      } py-3 border-b`}
    >
      <div
        className={`absolute top-0 start-0 w-full h-full bg-overlay backdrop-blur-sm z-[45] 
      ${
        isSearchOpen
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      } 
      transition-all duration-medium ease-in-out`}
        aria-hidden="true"
        onClick={closeSearchWindow}
      ></div>
      <SearchWindow
        isSearchOpen={isSearchOpen}
        handleSearchClosing={closeSearchWindow}
      />
      {barVisibility && (
        <AnnouncementBar hideAnnouncementBar={hideAnnouncementBar} />
      )}
      <Icon
        name="menu"
        className="lg:hidden text-primary-dark"
        onClickFunction={displaySideNav}
        aria-expanded={navVisibility}
      />
      <Logo />
      {navVisibility && (
        <div
          className="absolute lg:hidden w-full h-full start-0 top-0 bg-red-500 backdrop-blur-sm z-0"
          onClick={closeSideNav}
          aria-hidden="true"
        ></div>
      )}
      <Nav navVisibility={navVisibility} onClickFunction={closeSideNav} />
      <HeaderIcons
        handleOpenCart={handleOpenCart}
        handleSearchOpening={openSearchWindow}
      />
    </header>
  );
}
export default Header;
