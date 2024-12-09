/* eslint-disable react/prop-types */
import EmptyCart from "./EmptyCart";
import Icon from "./Icon";

function CartDrawer({ isCartOpen, handleCloseCart }) {
  return (
    isCartOpen && (
      <>
        <div
          className="absolute top-0 start-0 w-full h-full bg-overlay"
          onClick={handleCloseCart}
          aria-hidden="true"
        ></div>
        <div className="absolute top-0 end-0 w-10/12 md:w-1/2 lg:w-2/5 h-full flex flex-col py-4 px-4 bg-primary-light rounded-l-small overflow-hidden">
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
    )
  );
}
export default CartDrawer;
