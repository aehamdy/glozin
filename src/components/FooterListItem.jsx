/* eslint-disable react/prop-types */
function FooterListItem({ item }) {
  return (
    <li className="w-fit text-secondary-light hover:text-primary-light hover:ps-3 duration-short">
      <a href="#">{item.title}</a>
    </li>
  );
}
export default FooterListItem;
