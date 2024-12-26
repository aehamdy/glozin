/* eslint-disable react/prop-types */

import { useState } from "react";
import Icon from "./Icon";

function Accordion({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = (e) => {
    setIsOpen(e.target.open);
  };

  return (
    <details onToggle={handleToggle} className="mb-5">
      <summary className="flex justify-between gap-10 w-fit py-3 font-semibold text-secondary-dark cursor-pointer">
        {question}
        <Icon
          name={isOpen ? "minus" : "plus"}
          className="text-content-medium-dark"
        />
      </summary>
      <div className="px-5 text-content-medium-dark">
        <p>{answer}</p>
      </div>
    </details>
  );
}
export default Accordion;
