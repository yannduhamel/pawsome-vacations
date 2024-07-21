import { NavLink } from "react-router-dom";
import "./NotFound.css";

export default function NotFound() {
  return (
    <div className="notFound">
      <h1 className="errorTitle">Erreur 404, page non trouvée</h1>
      <img
        src="../../../static/images/notfound.png"
        alt=""
        className="errorImage"
      />
      <div className="errorContainer">
        <p className="errorMessage">Vos vacances, ne se trouvent pas ici.</p>
        <div className="redirectContainer">
          <p className="errorMessage">Vous les trouverez sans doute par</p>
          <NavLink to="/" className="homeRedirect">
            là
          </NavLink>
        </div>
      </div>
    </div>
  );
}
