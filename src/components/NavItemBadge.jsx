/* eslint-disable react/prop-types */

function NavItemBadge({ badgeText }) {
  return (
      <div className="absolute w-2 h-2 top-1/2 translate-y-[-140%] -end-6">
          {/* <div className="relative"> */}
              <span className="absolute text-xs py-1 px-1 text-primary-light bg-primary-red rounded">{badgeText.toUpperCase()}</span>
              <span className="absolute w-2 h-2 top-1/2 start-0 translate-y-[50%] bg-primary-red rotate-45 z-[-1]"></span>
          {/* </div> */}
      </div>
  )
}
export default NavItemBadge