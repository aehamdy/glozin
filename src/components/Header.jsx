import { useState } from "react"
import AnnouncementBar from "./AnnouncementBar"
import HeaderIcons from "./HeaderIcons"
import Logo from "./Logo"

function Header() {
    const [barVisibility, setBarVisibility] = useState(true);

    const hideAnnouncementBar = () => {
        setBarVisibility(false);
    }

  return (
    <header className={`flex justify-between items-center ${barVisibility && 'mt-[32px]'} py-3 border-b`}>
        {barVisibility && <AnnouncementBar hideAnnouncementBar={hideAnnouncementBar} />}
        <Logo />
        <HeaderIcons />
    </header>
  )
}
export default Header