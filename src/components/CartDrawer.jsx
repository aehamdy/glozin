/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import Modal from "../common/Modal";
import { useCart } from "../context/CartContext";
import CartDrawerContent from "./CartDrawerContent";
import CartDrawerPanel from "./CartDrawerPanel";
import CartProductsCount from "./CartProductsCount";
import Icon from "./Icon";

function CartDrawer({ isCartOpen, handleCloseCart }) {
  const { cartList } = useCart();
  const [isAnimating, setIsAnimating] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isCartOpen) {
      setIsVisible(true);
      setTimeout(() => setIsAnimating(true), 10);
    } else {
      setIsAnimating(false);
      setTimeout(() => setIsVisible(false), 300);
    }
  }, [isCartOpen]);

  const handleClick = (e) => {
    e.stopPropagation();
  };

  return isVisible ? (
    <Modal isOpen={true} onClose={handleCloseCart}>
      <div
        onClick={handleClick}
        className={`fixed top-0 end-0 w-10/12 md:w-3/5 lg:w-2/5 h-full flex flex-col pt-4 bg-primary-light rounded-l-small overflow-hidden z-top 
            transition-transform duration-300 ease-in-out will-change-transform ${
              isAnimating ? "translate-x-0" : "translate-x-full"
            }`}
      >
        <div className="flex justify-between items-center px-4">
          <CartProductsCount />
          <Icon
            name="close"
            className="text-content-medium-dark hover:scale-110 hover:rotate-180 duration-700"
            onClickFunction={handleCloseCart}
          />
        </div>
        <CartDrawerContent handleCloseCart={handleCloseCart} />
        {cartList.length > 0 && (
          <CartDrawerPanel handleCloseCart={handleCloseCart} />
        )}
      </div>
    </Modal>
  ) : null;
}

export default CartDrawer;
