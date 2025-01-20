/* eslint-disable react/prop-types */
import Icon from "./Icon";

function ProductCardButton({ icon, onClickFunc, productId }) {
  return (
    <button
      onClick={() => onClickFunc(productId)}
      className={`group relative top-0 -translate-y-1/4 md:-translate-y-0 end-0 p-3 md:p-4
      bg-slate-50 text-secondary-dark hover:text-primary-light hover:bg-secondary-dark rounded-full shadow-md cursor-pointer duration-medium`}
    >
      <Icon name={icon} size="18" />
    </button>
  );
}
export default ProductCardButton;
