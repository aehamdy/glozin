/* eslint-disable react/prop-types */
import FooterHeading from "./FooterHeading";
import FooterListItem from "./FooterListItem";

function FooterList({ list }) {
  return (
    <div className="flex flex-col gap-3 lg:gap-8 md:w-fit">
      <FooterHeading title={list.heading} />
      <ul className="flex flex-col items-center gap-4 lg:gap-5">
        {list.items.map((item, index) => (
          <FooterListItem key={index} item={item} />
        ))}
      </ul>
    </div>
  );
}
export default FooterList;
