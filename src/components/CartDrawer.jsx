/* eslint-disable react/prop-types */
import EmptyCart from "./EmptyCart";
import Icon from "./Icon";

function CartDrawer({ isCartOpen, handleCloseCart }) {
  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-overlay transition-opacity duration-[350ms] ease-in-out ${
          isCartOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={handleCloseCart}
        aria-hidden="true"
      ></div>

      {/* Cart Drawer */}
      <div
        className={`fixed top-0 right-0 w-10/12 md:w-1/2 lg:w-2/5 h-full flex flex-col py-4 px-4 bg-primary-light rounded-l-small overflow-hidden transition-all duration-[350ms] ease-in-out transform ${
          isCartOpen
            ? "translate-x-0 opacity-100"
            : "translate-x-full opacity-0"
        }`}
      >
        <div className="flex justify-between items-center">
          <h4 className="font-semibold text-xl text-heading-dark">
            Shopping Cart (0)
          </h4>
          <Icon
            name="close"
            className="text-content-medium-dark"
            onClickFunction={handleCloseCart}
          />
        </div>
        <EmptyCart />
      </div>
    </>
  );
}

export default CartDrawer;
