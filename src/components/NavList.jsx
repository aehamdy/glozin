import navData from "../data/navData"
import NavListItem from "./NavListItem"

function NavList() {
  return (
    <nav>
        <ul className="flex justify-between items-center gap-5">
            {navData.map((item, index) => (
                <NavListItem key={index} item={item} />
            ))}
        </ul>
    </nav>
  )
}
export default NavList