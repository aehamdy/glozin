/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import Button from "./Button";
import { Link } from "react-router-dom";

function CartDrawerPanel({ cartList }) {
  const [subtotal, setSubtotal] = useState(0);

  useEffect(() => {
    setSubtotal(cartList.reduce((total, curr) => total + curr.price, 0));
  }, [cartList]);

  return (
    <div className="flex flex-col justify-between gap-6 mt-auto pt-4 pb-4 px-4 text-secondary-dark bg-cloud-gray border-t">
      <div className="flex justify-between font-semibold">
        <div>Subtotal:</div>
        <div>${subtotal.toFixed(2)}</div>
      </div>
      <div className="flex flex-col items-center gap-5">
        <Button className="block w-3/4 py-3 font-semibold text-primary-light bg-secondary-dark hover:bg-primary-dark rounded-medium">
          <Link to="">Checkout</Link>
        </Button>
      </div>
    </div>
  );
}
export default CartDrawerPanel;
