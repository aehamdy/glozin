/* eslint-disable react/prop-types */
import Icon from "./Icon";

function ProductInCart({ product }) {
  return (
    <article className="flex items-start pt-4 px-1 border-b">
      <div className="flex w-[120px] rounded-medium overflow-hidden">
        <div>
          <img src={product.images[0]} alt={product.title + " image"} />
        </div>
      </div>
      <div className="flex flex-col justify-start items-start gap-1 font-medium text-sm text-secondary-dark">
        <h4>{product.title}</h4>
        <h4>${product.price}</h4>
      </div>
      <div className="ms-auto">
        <button>
          <Icon
            name="trash"
            size="16"
            className="text-content-light-dark hover:text-secondary-dark"
          />
        </button>
      </div>
    </article>
  );
}
export default ProductInCart;
