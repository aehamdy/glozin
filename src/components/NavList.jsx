import navData from "../data/navData"
import NavListItem from "./NavListItem"

function NavList() {
  return (
    <nav className="hidden lg:block">
        <ul className="lg:flex justify-between items-center gap-3">
            {navData.map((item, index) => (
                <NavListItem key={index} item={item} />
            ))}
        </ul>
    </nav>
  )
}
export default NavList