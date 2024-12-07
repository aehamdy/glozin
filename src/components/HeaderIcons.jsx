import Icon from "./Icon"

function HeaderIcons() {
  return (
    <div className="flex">
        <Icon name="search" className="hover:text-red-500 " />
        <Icon name="user" className="hidden lg:block hover:text-red-500 " />
        <Icon name="wishlist" className="hidden lg:block hover:text-red-500 " />
        <Icon name="cart" className="hover:text-red-500 " />
    </div>
  )
}
export default HeaderIcons