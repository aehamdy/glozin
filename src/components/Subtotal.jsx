/* eslint-disable react/prop-types */
import { useCart } from "../context/CartContext";

function Subtotal({ className }) {
  const { subtotal } = useCart();

  return <span className={`${className}`}>{subtotal.toFixed(2)}</span>;
}
export default Subtotal;
