import { Link } from "react-router-dom";
import Icon from "./Icon";

function GoBackButton() {
  return (
    <Link
      to="/"
      className="group flex items-center justify-center w-fit bg-primary-light hover:bg-secondary-dark p-1.5 border rounded-tiny duration-medium"
    >
      <Icon
        name="leftArrow"
        className="text-secondary-dark group-hover:text-primary-light"
      />
    </Link>
  );
}
export default GoBackButton;
