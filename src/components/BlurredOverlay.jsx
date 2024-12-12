/* eslint-disable react/prop-types */
function BlurredOverlay({ triggerOnClick, state, className }) {
  const handleClick = () => triggerOnClick();

  return (
    <div
      className={`absolute top-0 start-0 w-full h-full bg-overlay backdrop-blur-sm transition-opacity transform duration-[300ms] ease-in-out z-overlay 
        ${
          state
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        } ${className}`}
      aria-hidden="true"
      onClick={handleClick}
    ></div>
  );
}

export default BlurredOverlay;
