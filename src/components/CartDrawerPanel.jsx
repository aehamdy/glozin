/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

function CartDrawerPanel({ cartList }) {
  const [subtotal, setSubtotal] = useState(0);

  useEffect(() => {
    setSubtotal(cartList.reduce((total, curr) => total + curr.price, 0));
  }, [cartList]);

  return (
    <div className="py-3 px-4 text-secondary-dark bg-cloud-gray">
      <div className="flex justify-between font-semibold">
        <div>Subtotal:</div>
        <div>${subtotal.toFixed(2)}</div>
      </div>
    </div>
  );
}
export default CartDrawerPanel;
