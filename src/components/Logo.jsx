import { Link } from "react-router-dom";
import logoImg from "../assets/logo.svg";

function Logo() {
  return (
    <div>
      <Link to="/">
        <img src={logoImg} alt="logo image" />
      </Link>
    </div>
  );
}

export default Logo;
