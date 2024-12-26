/* eslint-disable react/prop-types */

import Accordion from "./Accordion";

function FAQGroup({ group }) {
  return (
    <article>
      <h2 className="text-red-500">{group.heading}</h2>
      {group.faqs.map((faq, index) => (
        <Accordion key={index} question={faq.question} answer={faq.answer} />
      ))}
    </article>
  );
}
export default FAQGroup;
