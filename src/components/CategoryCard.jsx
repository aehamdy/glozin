/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

function CategoryCard({ category, variant = "default" }) {
  const isCircle = variant.toLowerCase() === "circle";
  const categoryName =
    category.name.charAt(0).toUpperCase() +
    category.name.slice(1).toLowerCase();

  return (
    <li
      className={`group ${
        isCircle
          ? "snap-start shrink-0 w-[calc(100%/3.3)] md:w-[calc(100%/4.4)] lg:w-[calc(100%/7)]"
          : "relative h-[200px] sm:h-[280px] md:h-[350px] rounded-tiny shadow-sm hover:shadow-xl"
      } overflow-hidden duration-medium cursor-pointer`}
    >
      <Link
        to={category.endPoint}
        className={`${
          isCircle && "flex flex-col justify-center items-center gap-3"
        }`}
      >
        <div
          className={`${
            isCircle &&
            "flex justify-center items-center shadow overflow-hidden rounded-full"
          }`}
        >
          <img
            src={category.image}
            alt={`${category.name}'s image`}
            loading="lazy"
            className={`w-full h-full object-cover object-center ${
              isCircle
                ? "group-hover:scale-110 rounded-full duration-medium"
                : "absolute"
            }`}
          />
        </div>
        {isCircle ? (
          <span className="font-semibold text-secondary-dark">
            {categoryName}
          </span>
        ) : (
          <div className="absolute w-fit md:w-8/12 start-1/2 bottom-2 md:bottom-3 -translate-x-1/2 py-2.5 md:py-3 lg:py-3 px-6 md:px-6 lg:px-8 font-semibold text-primary-dark group-hover:text-primary-light bg-primary-light group-hover:bg-secondary-dark rounded-medium duration-medium">
            {categoryName}
          </div>
        )}
      </Link>
    </li>
  );
}

export default CategoryCard;
