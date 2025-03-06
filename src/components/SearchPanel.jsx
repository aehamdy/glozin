/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import Modal from "../common/Modal";
import Icon from "./Icon";
import PanelTitle from "./PanelTitle";
import useSearchProduct from "../hooks/useSearchProduct";

function SearchPanel({ isSearchOpen, handleSearchClosing }) {
  const [searchInput, setSearchInput, searchList] = useSearchProduct();
  const [isAnimating, setIsAnimating] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const onInputChange = (e) => {
    setSearchInput(e.target.value);
  };

  const handleClick = (e) => {
    e.stopPropagation();
  };

  useEffect(() => {
    if (isSearchOpen) {
      setIsVisible(true);
      setTimeout(() => setIsAnimating(true), 10);
    } else {
      setIsAnimating(false);
      setTimeout(() => setIsVisible(false), 300);
    }
  }, [isSearchOpen]);

  return isVisible ? (
    <Modal isOpen={isVisible} onClose={handleSearchClosing}>
      <div
        onClick={handleClick}
        className={`fixed top-0 start-0 w-full h-[90%] flex flex-col gap-5 py-3 px-4 bg-primary-light rounded-b-small shadow-lg z-top transform 
        transition-transform duration-500 ease-in-out ${
          isAnimating ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <Icon
          name="close"
          className="ml-auto text-content-medium-dark hover:scale-150"
          onClickFunction={handleSearchClosing}
        />
        <PanelTitle
          title="search our site"
          styles="text-2xl text-secondary-dark"
        />
        <form action="#">
          <div className="group relative w-[90%] lg:w-[65%] mx-auto">
            <input
              onChange={onInputChange}
              value={searchInput}
              type="search"
              name="search"
              id=""
              placeholder="I'm looking for..."
              className=" w-full py-3 px-8 font-medium text-sm text-content-medium-dark bg-transparent border border-[#ebebeb] focus:outline-none focus:border-2 focus:border-primary-border rounded-medium"
            />
            <Icon
              name="search"
              className="absolute top-1/2 -translate-y-1/2 end-4 w-5 h-full text-content-medium-dark bg-transparent group-hover:scale-125"
            />
          </div>
        </form>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 max-h-[400px] p-4 overflow-y-auto">
          {searchList.length > 0 &&
            searchList.map((product) => (
              <div
                key={product.id}
                className="bg-white p-0 rounded-lg shadow-md h-[250px] flex flex-col justify-between"
              >
                <div className="aspect-square flex justify-center items-center overflow-hidden">
                  <img
                    src={product.images[0]}
                    alt={product.title}
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="text-sm font-semibold text-black">
                  {product.title}
                </h3>
                <p className="font-semibold text-gray-700">${product.price}</p>
              </div>
            ))}
        </div>
      </div>
    </Modal>
  ) : null;
}
export default SearchPanel;
