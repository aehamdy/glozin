/* eslint-disable react/prop-types */

function NavItemBadge({ badgeText }) {
  return (
      <div className="absolute w-2 h-2 top-1/2 lg:top-1 translate-y-[-140%] lg:translate-y-[-150%] -end-6 lg:end-0">
              <span className="absolute text-xs lg:text-[10px] py-1 lg:py-0 px-1 text-primary-light bg-primary-red rounded">
                {badgeText.toUpperCase()}
                </span>
              <span className="absolute w-2 h-2 top-1/2 lg:top-[80%] start-0 lg:start-[100%] translate-y-[50%] bg-primary-red rotate-45 z-[-1]"></span>
      </div>
  )
}
export default NavItemBadge