/* eslint-disable react/prop-types */

import { useState } from "react";
import { NavLink } from "react-router-dom";
import handleLogout from "../../../lib/logout";
import "./BurgerMenu.css";

function Menu({ currentUser = null, setCurrentUser }) {
  const [showLinks, setShowLinks] = useState(false);
  const handleShowLinks = () => {
    setShowLinks(!showLinks);
  };

  return (
    <div className={`menu ${showLinks ? "active" : "inactive"}`}>
      <ul className="navbarList">
        {currentUser ? (
          <li className="navbarItem welcomeMessage">
            Bonjour {currentUser.firstname} !
          </li>
        ) : null}
        <li className="navbarItem">
          <NavLink to="/" className="navbarLink" onClick={handleShowLinks}>
            Accueil
          </NavLink>
        </li>
        <li className="navbarItem">
          {currentUser ? (
            <button type="button" onClick={() => handleLogout(setCurrentUser)}>
              Déconnexion
            </button>
          ) : (
            <NavLink
              to="/login"
              className="navbarLink"
              onClick={handleShowLinks}
            >
              {" "}
              Connexion{" "}
            </NavLink>
          )}
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
