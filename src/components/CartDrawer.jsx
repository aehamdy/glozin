/* eslint-disable react/prop-types */
import Modal from "../common/Modal";
import BlurredOverlay from "./BlurredOverlay";
import EmptyCart from "./EmptyCart";
import Icon from "./Icon";

function CartDrawer({ isCartOpen, handleCloseCart }) {
  return (
    <>
      {/* <BlurredOverlay triggerOnClick={handleCloseCart} state={isCartOpen} /> */}

      <Modal isOpen={isCartOpen} onClose={handleCloseCart}>
        {/* Cart Drawer */}
        <div
          className={`fixed top-0 end-0 w-10/12 md:w-3/5 lg:w-2/5 h-full flex flex-col py-4 px-4 bg-primary-light rounded-l-small overflow-hidden z-top transition-all duration-[350ms] ease-in-out transform ${
            isCartOpen ? "translate-x-0" : "translate-x-1/2"
          }`}
        >
          <div className="flex justify-between items-center">
            <h4 className="font-semibold text-xl text-heading-dark">
              Shopping Cart (0)
            </h4>
            <Icon
              name="close"
              className="text-content-medium-dark hover:scale-150"
              onClickFunction={handleCloseCart}
            />
          </div>
          <EmptyCart handleCloseCart={handleCloseCart} />
        </div>
      </Modal>
    </>
  );
}

export default CartDrawer;
