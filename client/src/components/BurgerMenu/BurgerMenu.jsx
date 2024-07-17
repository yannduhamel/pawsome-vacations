import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./BurgerMenu.css";

function Menu() {
  const [showLinks, setShowLinks] = useState(false);
  const handleShowLinks = () => {
    setShowLinks(!showLinks);
  };

  return (
    <div className={`menu ${showLinks ? "active" : "inactive"}`}>
      <ul className="navbarList">
        <li className="navbarItem">
          <NavLink to="/" className="navbarLink" onClick={handleShowLinks}>
            Accueil
          </NavLink>
        </li>
        <li className="navbarItem">
          <NavLink to="/" className="navbarLink" onClick={handleShowLinks}>
            Suivez-nous
          </NavLink>
        </li>
        <li className="navbarItem">
          <NavLink to="/" className="navbarLink" onClick={handleShowLinks}>
            Licence
          </NavLink>
        </li>
      </ul>
      <button
        className="burgerMenu"
        aria-label="burger"
        type="button"
        onClick={handleShowLinks}
      >
        <span className="burgerLine" />
      </button>
    </div>
  );
}
export default Menu;
