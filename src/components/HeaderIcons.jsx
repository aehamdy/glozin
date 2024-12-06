import Icon from "./Icon"

function HeaderIcons() {
  return (
    <div className="flex">
        <Icon name="search" />
        <Icon name="user" className="hidden lg:block" />
        <Icon name="wishlist" className="hidden lg:block" />
        <Icon name="cart" />
    </div>
  )
}
export default HeaderIcons