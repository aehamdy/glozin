/* eslint-disable react/prop-types */
import { useCart } from "../context/CartContext";

function Subtotal({ className, selectedProduct }) {
  const { subtotal, newSubtotal } = useCart();

  return (
    <div className="flex gap-3">
      {newSubtotal > 0 && (
        <span className={`${newSubtotal && "font-medium text-red-500"}`}>
          $ {newSubtotal.toFixed(2)}
        </span>
      )}
      <span className={`${className} ${newSubtotal && "line-through"}`}>
        $ {selectedProduct ? selectedProduct.price : subtotal.toFixed(2)}
      </span>
    </div>
  );
}
export default Subtotal;
