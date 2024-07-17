import { useNavigate } from "react-router-dom";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import "./Navbar.css";

export default function Navbar() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };

  return (
    <nav>
      <button type="button" className="navLogo" onClick={handleClick}>
        Pawsome <br />
        Vacations
      </button>
      <BurgerMenu />
    </nav>
  );
}
