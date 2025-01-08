import Icon from "./Icon";
import ProductViewersCount from "./ProductViewersCount";

function ProductViewers() {
  return (
    <div className="flex items-center gap-2 md:gap-3 text-sm md:text-base text-content-medium-dark">
      <Icon
        name="eye"
        size="24"
        className="p-1 text-primary-light bg-secondary-dark rounded-tiny select-none"
      />

      <div className="flex items-center gap-2">
        <ProductViewersCount />
        <p className=""> people are viewing this right now</p>
      </div>
    </div>
  );
}
export default ProductViewers;
