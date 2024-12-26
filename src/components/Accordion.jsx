/* eslint-disable react/prop-types */

function Accordion({ question, answer }) {
  return (
    <details>
      {answer}
      <summary>{question}</summary>
    </details>
  );
}
export default Accordion;
