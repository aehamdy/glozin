import EmptyCart from "./EmptyCart";
import Icon from "./Icon";

function CartDrawer() {
  return (
    <div className="absolute top-0 end-0 w-full h-full lg:w-2/5 flex flex-col py-4 px-4 bg-primary-light">
      <div className="flex justify-between items-center">
        <h4 className="font-semibold text-xl text-heading-dark">
          Shopping Cart (0)
        </h4>
        <Icon name="close" className="text-content-medium-dark" />
      </div>
      <EmptyCart />
    </div>
  );
}
export default CartDrawer;
