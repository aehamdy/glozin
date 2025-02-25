/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

function CategoryCard({ category }) {
  return (
    <li className="group relative rounded-tiny hover:shadow-xl overflow-hidden duration-medium cursor-pointer">
      <Link to={`/categories${category.endPoint}`}>
        <img
          src={category.image}
          alt={`${category.name}'s image`}
          loading="lazy"
          className="w-full h-full top-0 start-0"
        />
        <div className="absolute w-8/12 start-1/2 bottom-4 lg:bottom-8 -translate-x-1/2 py-2.5 md:py-4 lg:py-3 px-3 md:px-6 lg:px-8 font-semibold text-primary-dark group-hover:text-primary-light bg-primary-light group-hover:bg-secondary-dark rounded-medium duration-medium">
          {category.name.charAt(0).toUpperCase() +
            category.name.slice(1).toLowerCase()}
        </div>
      </Link>
    </li>
  );
}

export default CategoryCard;
