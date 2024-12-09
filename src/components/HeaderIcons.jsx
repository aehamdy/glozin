import Icon from "./Icon";

function HeaderIcons() {
  return (
    <div className="flex gap-4">
      <Icon name="search" className="text-primary-dark hover:text-red-500 " />
      <Icon
        name="user"
        className="hidden lg:block text-primary-dark  hover:text-red-500 "
      />
      <Icon
        name="wishlist"
        className="hidden lg:block text-primary-dark  hover:text-red-500 "
      />
      <Icon name="cart" className="text-primary-dark hover:text-red-500 " />
    </div>
  );
}
export default HeaderIcons;
