import navData from "../data/navData"
import Icon from "./Icon"
import NavListItem from "./NavListItem"

function NavList() {
  return (
    <nav className="absolute lg:relative top-0 start-0 flex-col items-start w-2/3 lg:w-fit md:w-1/3 h-full bg-primary-light lg:bg-transparent z-50 overflow-hidden rounded-tr-2xl rounded-br-2xl lg:rounded-none">
        <h4 className="lg:hidden px-3 font-semibold flex justify-between items-center py-4 text-primary-light bg-primary-red">Menu<Icon name="close" /></h4>
        <ul className="flex flex-col items-start lg:flex-row lg:justify-between lg:items-center gap-3 py-3 px-3 lg:p-0">
            {navData.map((item, index) => (
                <NavListItem key={index} item={item} />
            ))}
        </ul>
    </nav>
  )
}
export default NavList