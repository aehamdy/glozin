import AnnouncementBar from "./AnnouncementBar"
import HeaderIcons from "./HeaderIcons"
import Logo from "./Logo"

function Header() {


  return (
    <header className="flex justify-between items-center py-3 border-b">
        <Logo />
        <HeaderIcons />
    </header>
  )
}
export default Header