import FooterHeading from "./FooterHeading";
import FooterListItem from "./FooterListItem";

const lists = [
  {
    heading: "Our Company",
    items: [
      { title: "About Us", link: "" },
      { title: "Contact Us", link: "" },
      { title: "Sale", link: "" },
      { title: "FAQ", link: "" },
    ],
  },
  {
    heading: "Shop Categories",
    items: [
      { title: "Hot Deals", link: "" },
      { title: "Best Seller", link: "" },
      { title: "Sale & Special Offers", link: "" },
      { title: "Popular Trends", link: "" },
    ],
  },
];

function FooterLists() {
  return (
    <div className="grid grid-cols-2 gap-5">
      {lists.map((list, index) => (
        <ul key={index} className="flex flex-col items-center gap-5">
          <FooterHeading title={list.heading} />
          {list.items.map((item, index) => (
            <FooterListItem key={index} item={item} />
          ))}
        </ul>
      ))}
    </div>
  );
}
export default FooterLists;
