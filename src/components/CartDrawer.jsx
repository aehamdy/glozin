/* eslint-disable react/prop-types */
import Modal from "../common/Modal";
import { useCart } from "../context/CartContext";
import CartDrawerContent from "./CartDrawerContent";
import CartDrawerPanel from "./CartDrawerPanel";
import CartProductsCount from "./CartProductsCount";
import Icon from "./Icon";

function CartDrawer({ isCartOpen, handleCloseCart }) {
  const { cartList } = useCart();

  const handleClick = (e) => {
    e.stopPropagation();
  };

  return (
    <Modal isOpen={isCartOpen} onClose={handleCloseCart}>
      <div
        onClick={handleClick}
        className={`fixed top-0 right-0 w-10/12 md:w-3/5 lg:w-2/5 h-full flex flex-col pt-4 bg-primary-light rounded-l-small overflow-hidden z-top transition-transform duration-300 ease-in-out ${
          isCartOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center px-4">
          <CartProductsCount value={cartList?.length} />
          <Icon
            name="close"
            className="text-content-medium-dark hover:scale-150"
            onClickFunction={handleCloseCart}
          />
        </div>
        <CartDrawerContent
          cartList={cartList}
          handleCloseCart={handleCloseCart}
        />
        {cartList.length > 0 && <CartDrawerPanel />}
      </div>
    </Modal>
  );
}

export default CartDrawer;
