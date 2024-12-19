const scrollingTexts = [
  "Great-Free returns product within 10 days",
  "Subscribe and get 10% off your first purchase",
];

function HorizontalScrollingText() {
  return (
    <div className="mx-horizontal-spacing py-5 overflow-clip">
      <div className="scrolling-text h-[22px] flex items-center gap-3 ps-4 uppercase font-semibold text-[13px] text-content-medium-dark overflow-clip w-max animate-horizontal-move">
        {Array(3)
          .fill(scrollingTexts)
          .flat()
          .map((text, index, allTexts) => (
            <div key={index}>
              <p
                key={index}
                className="py-1 px-3"
                aria-hidden={index !== allTexts.indexOf(text)}
              >
                {text}
              </p>
              <svg
                width="12"
                height="12"
                fill="none"
                aria-hidden={index !== allTexts.indexOf(text)}
              >
                <path
                  fill="currentColor"
                  d="M0 6c3 0 6-3 6-6 0 3 3 6 6 6-3 0-6 3-6 6 0-3-3-6-6-6Z"
                ></path>
              </svg>
            </div>
          ))}
      </div>
    </div>
  );
}
export default HorizontalScrollingText;
