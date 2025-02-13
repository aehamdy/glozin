/* eslint-disable react/prop-types */
import { useCart } from "../context/CartContext";

function ProductQuantityInput({ product, variant }) {
  const { dispatchCart } = useCart();

  return (
    <div className="flex items-center bg-[#F5F5F5] border rounded-medium overflow-hidden">
      <button
        type="button"
        onClick={() =>
          dispatchCart({ type: "decreaseQuantity", payload: product })
        }
        className={`${
          variant === "in-cart-drawer"
            ? "py-1 px-2"
            : "py-2 md:py-3 px-3 md:px-4 text-xl"
        } 
        ${
          product.orderQuantity <= 1
            ? "text-gray-300 cursor-not-allowed"
            : "text-primary-dark bg-transparent hover:bg-gray-200"
        } 
        `}
        aria-label="Decrease amount"
      >
        -
      </button>

      <input
        type="number"
        value={product.orderQuantity}
        readOnly
        className={`quantity-input ${
          variant === "in-cart-drawer" ? "w-6 text-sm" : "w-12 py-2 md:py-3"
        } bg-transparent text-primary-dark text-center focus:outline-none`}
        aria-label="Item amount"
      />

      <button
        type="button"
        onClick={() =>
          dispatchCart({ type: "increaseQuantity", payload: product })
        }
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
