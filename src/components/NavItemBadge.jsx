function NavItemBadge() {
  return (
    <div className="absolute -top-0.5 end-4">
    <div className="relative">
    <span className="absolute text-xs px-1 text-primary-light bg-warning-red">{item.badge.charAt(0).toUpperCase() + item.badge.slice(1).toLowerCase()}</span>
    <span className="absolute bottom-[-19px] start-0 translate-x-[50%] z-[-1] bg-warning-red w-2 h-2 rotate-45"></span>
    </div>
</div>
  )
}
export default NavItemBadge