/* eslint-disable react/prop-types */

import Accordion from "./Accordion";

function FAQGroup({ group }) {
  return (
    <article>
      <h2 className="mb-1 font-semibold text-2xl text-secondary-dark">
        {group.heading}
      </h2>
      {group.faqs.map((faq, index) => (
        <Accordion key={index} question={faq.question} answer={faq.answer} />
      ))}
    </article>
  );
}
export default FAQGroup;
