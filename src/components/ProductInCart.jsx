/* eslint-disable react/prop-types */
import { useCart } from "../context/CartContext";
import Icon from "./Icon";
import ProductQuantityInput from "./ProductQuantityInput";

function ProductInCart({ product }) {
  const { removeFromCart } = useCart();

  const handleOnRemoveClick = (product) => {
    removeFromCart(product);
  };

  return (
    <article className="flex items-start py-4 pe-2 border-b last:border-none">
      <div className="flex w-[120px] rounded-medium overflow-hidden">
        <div>
          <img src={product.images[0]} alt={product.title + " image"} />
        </div>
      </div>

      <div className="flex flex-col justify-between items-start gap-1 h-[90%] font-medium text-sm text-secondary-dark">
        <div className="flex flex-col justify-start items-start gap-1 text-start">
          <h4>{product.title}</h4>
          <div className="flex gap-1 text-priceInCart">
            <span>$ {product.price}</span>
          </div>
        </div>
        <ProductQuantityInput productItem={product} variant="in-cart-drawer" />
      </div>

      <div className="ms-auto">
        <button onClick={() => handleOnRemoveClick(product)}>
          <Icon
            name="trash"
            size="16"
            className="text-content-light-dark hover:text-primary-red active:text-red-700"
          />
        </button>
      </div>
    </article>
  );
}
export default ProductInCart;
