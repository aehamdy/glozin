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
        <ul key={index} className="flex flex-col gap-5">
          <h3 className="mb-2 font-semibold text-primary-light">
            {list.heading}
          </h3>
          {list.items.map((item, index) => (
            <li
              key={index}
              className="text-secondary-light hover:text-primary-light hover:ps-3 duration-short"
            >
              <a href="#">{item.title}</a>
            </li>
          ))}
        </ul>
      ))}
    </div>
  );
}
export default FooterLists;
