/* eslint-disable react/prop-types */
import Icon from "./Icon";
import PanelTitle from "./PanelTitle";

function SearchPanel({ isSearchOpen, handleSearchClosing }) {
  return (
    <div
      className={`fixed top-0 start-0 w-full h-[90%] flex flex-col gap-5 py-3 px-4 bg-primary-light rounded-b-small shadow-lg z-50 transform
        ${isSearchOpen ? "translate-y-0" : "-translate-y-full"}
        transition-transform duration-medium ease-in-out`}
    >
      <Icon
        name="close"
        className="ml-auto text-content-medium-dark"
        onClickFunction={handleSearchClosing}
      />
      <PanelTitle
        title="search our site"
        styles="text-2xl text-secondary-dark"
      />
      <form action="">
        <div className="relative w-[90%] lg:w-[65%] mx-auto">
          <input
            type="search"
            name="search"
            id=""
            placeholder="I'm looking for..."
            className=" w-full py-3 px-8 text-sm text-content-medium-dark bg-transparent border border-[#ebebeb] focus:outline-none focus:border-2 focus:border-primary-border rounded-medium"
          />
          <Icon
            name="search"
            className="absolute top-1/2 -translate-y-1/2 end-4 w-5 h-full text-content-medium-dark bg-transparent"
          />
        </div>
      </form>
    </div>
  );
}
export default SearchPanel;
