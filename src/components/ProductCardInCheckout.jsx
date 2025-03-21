/* eslint-disable react/prop-types */
import { useCart } from "../context/CartContext";

function ProductCardInCheckout({ product }) {
  const { buyNowProduct } = useCart();
  const itemTotalPrice = product.orderQuantity
    ? product.price * product.orderQuantity
    : product.price;

  return (
    <article className="flex justify-between gap-3 text-sm md:text-base">
      <div className="flex gap-3">
        <div className="relative w-[70px] h-[70px] flex justify-center items-center border border-gray-300 rounded-md">
          {!buyNowProduct && (
            <span className="flex justify-center items-center absolute top-0 end-0 translate-x-1/2 -translate-y-1/2 w-5 h-5  text-xs text-white bg-content-light-dark rounded-full">
              {product.orderQuantity}
            </span>
          )}
          <img
            src={`${product.images[0]}`}
            alt={`${product.title} image`}
            className="h-full object-cover"
          />
        </div>

        <div className="flex flex-col items-start">
          <span>{product.title}</span>
          <span className="text-price-originalPrice">$ {product.price}</span>
        </div>
      </div>

      <div className="font-semibold">
        <span>$ {itemTotalPrice.toFixed(2)}</span>
      </div>
    </article>
  );
}
export default ProductCardInCheckout;
