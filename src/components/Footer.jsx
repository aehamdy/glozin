import FooterInfoSection from "./FooterInfoSection";
import FooterList from "./FooterList";
import FooterNewsletter from "./FooterNewsletter";
import SocialIcons from "./SocialIcons";

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

function Footer() {
  return (
    <footer className="grid grid-cols-2 lg:grid-cols-4 gap-7 lg:gap-0 py-10 lg:py-16 px-6 h-[90dvh] lg:h-[70dvh] text-secondary-light md:bg-secondary-dark rounded-small">
      <div className="flex flex-col gap-5 lg:gap-10 ">
        <FooterInfoSection />
        <SocialIcons />
      </div>
      {lists.map((list, index) => (
        <FooterList key={index} list={list} />
      ))}
      <FooterNewsletter />
    </footer>
  );
}
export default Footer;
