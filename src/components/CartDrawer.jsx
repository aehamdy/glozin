/* eslint-disable react/prop-types */
import BlurredOverlay from "./BlurredOverlay";
import EmptyCart from "./EmptyCart";
import Icon from "./Icon";

function CartDrawer({ isCartOpen, handleCloseCart }) {
  return (
    <>
      <BlurredOverlay triggerOnClick={handleCloseCart} state={isCartOpen} />

      {/* Cart Drawer */}
      <div
        className={`fixed top-0 right-0 w-10/12 md:w-3/5 lg:w-2/5 h-full flex flex-col py-4 px-4 bg-primary-light rounded-l-small overflow-hidden transition-all duration-[350ms] ease-in-out transform ${
          isCartOpen ? "translate-x-0" : "translate-x-full"
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
        <EmptyCart handleCloseCart={handleCloseCart} />
      </div>
    </>
  );
}

export default CartDrawer;
