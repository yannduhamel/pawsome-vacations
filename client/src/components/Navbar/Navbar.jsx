/* eslint-disable react/prop-types */

import { useNavigate } from "react-router-dom";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import "./Navbar.css";

export default function Navbar({ currentUser = null, setCurrentUser }) {
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
      <BurgerMenu currentUser={currentUser} setCurrentUser={setCurrentUser} />
    </nav>
  );
}
