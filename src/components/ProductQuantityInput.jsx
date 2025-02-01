/* eslint-disable react/prop-types */
import { useCart } from "../context/CartContext";

function ProductQuantityInput({ productItem, variant }) {
  const { cartList, setCartList } = useCart();

  const produc = cartList?.find((prod) => prod.id === productItem.id);
  const productQuantity = produc ? produc.orderQuantity : 1;

  const decreaseQuantity = () => {
    setCartList((prev) =>
      prev.map((prod) =>
        prod.id === productItem.id && prod.orderQuantity > 1
          ? { ...prod, orderQuantity: prod.orderQuantity - 1 }
          : prod
      )
    );
  };

  const increaseQuantity = () => {
    setCartList((prev) =>
      prev.map((prod) =>
        prod.id === productItem.id
          ? { ...prod, orderQuantity: prod.orderQuantity + 1 }
          : prod
      )
    );
  };

  return (
    <div className="flex items-center bg-[#F5F5F5] border rounded-medium overflow-hidden">
      <button
        type="button"
        onClick={decreaseQuantity}
        className={`${
          variant === "in-cart-drawer"
            ? "py-1 px-2"
            : "py-2 md:py-3 px-3 md:px-4 text-xl"
        } ${
          productQuantity <= 1
            ? "text-gray-300"
            : "text-primary-dark bg-transparent hover:bg-gray-200"
        } `}
        aria-label="Decrease amount"
      >
        -
      </button>

      <input
        type="number"
        value={productQuantity}
        readOnly
        className={`quantity-input ${
          variant === "in-cart-drawer" ? "w-6 text-sm" : "w-12 py-2 md:py-3"
        } bg-transparent text-primary-dark text-center focus:outline-none`}
        aria-label="Item amount"
      />

      <button
        type="button"
        onClick={increaseQuantity}
        className={`${
          variant === "in-cart-drawer"
            ? "py-1 px-2"
            : "py-2 md:py-3 px-3 md:px-4 text-xl"
        } text-primary-dark bg-transparent hover:bg-gray-200`}
        aria-label="Increase amount"
      >
        +
      </button>
    </div>
  );
}

export default ProductQuantityInput;
