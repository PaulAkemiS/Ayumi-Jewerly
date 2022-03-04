import React, { useContext } from "react";
import "../App.css"
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";
import { CartContext } from "./CartContext";


function NavBar() {
  const { cartCount } = useContext(CartContext);
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse lista" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item item">
                <Link to="./productos/categoria/collares" className="nav-link" href="#">Collares</Link>
              </li>
              <li className="nav-item item">
                <Link to="./productos/categoria/aros" className="nav-link item lineas" href="#">Aros</Link>
              </li>
              <li className="nav-item dropdown item">
                <a className="nav-link dropdown-toggle lineas" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Anillos y pulseras
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <li><Link to="./productos/categoria/anillos" className="dropdown-item item" href="#">Anillos</Link></li>
                  <li><Link to="./productos/categoria/pulseras" className="dropdown-item item" href="#">Pulseras</Link></li>
                </ul>
              </li>
              <li className="nav-item dropdown item">
                <a className="nav-link dropdown-toggle lineas" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Relojes
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <li><Link to="./productos/categoria/relojesH" className="dropdown-item item" href="#">Hombre</Link></li>
                  <li><Link to="./productos/categoria/relojesM" className="dropdown-item item" href="#">Mujer</Link></li>
                </ul>
              </li>
              <Link to="./carrito">
                <CartWidget cantidad={cartCount} />
              </Link>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export { NavBar }