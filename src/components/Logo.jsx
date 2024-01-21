import { Link } from "react-router-dom";
import logo from "../assets/images/pro.png";

const Logo = () => {
  return (
    <Link to={"/"}>
      <img src={logo} alt="provision" className="w-16 invert" />
    </Link>
  );
};

export default Logo;
