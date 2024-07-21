import { NavLink } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  return (
    <footer>
      <p className="copyright">© 2024 Pawsome Vacations</p>
      <NavLink className="footerLink">Nous contacter</NavLink>
      <NavLink className="footerLink">A propos</NavLink>
      <NavLink className="footerLink">Confidentialité</NavLink>
      <NavLink className="footerLink">Conditions Générales</NavLink>
      <NavLink className="footerLink">Plan du site</NavLink>
    </footer>
  );
}
