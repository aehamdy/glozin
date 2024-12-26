/* eslint-disable react/prop-types */
import { useState, useRef } from "react";
import Icon from "./Icon";

function Accordion({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="mb-5 pb-3 border-b">
      <button
        className="flex justify-between gap-10 w-full py-3 font-semibold text-secondary-dark"
        onClick={handleToggle}
        aria-expanded={isOpen}
      >
        {question}
        <Icon
          name={isOpen ? "minus" : "plus"}
          size="18"
          className="text-content-light-dark"
        />
      </button>
      <div
        ref={contentRef}
        className="overflow-hidden transition-max-height duration-300 ease-in-out"
        style={{
          maxHeight: isOpen ? `${contentRef.current.scrollHeight}px` : "0",
        }}
      >
        <div className="pb-5 px-5 text-content-medium-dark">
          <p>{answer}</p>
        </div>
      </div>
    </div>
  );
}

export default Accordion;
