/*import {Link} from "react-router-dom"
import "../css/Navbar.css";

function NavBar() {
    return <nav className="navbar">
    <div className="navbar-brand">
        <Link to="/">Movie App</Link>
    </div>
    <div className="navbar-links">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/favorites" className="nav-link">Favorites</Link>
    </div>
    </nav>
}

export default NavBar;
*/

import { Link } from "react-router-dom";
import "../css/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">Movie App</h2>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/favorites">Favorites</Link>
      </div>
    </nav>
  );
}

export default Navbar;
