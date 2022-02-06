import React from "react";
import "../App.css"
import { GiCutDiamond } from 'react-icons/gi';
import Cart from "./CartWidget";


function NavBar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#"><GiCutDiamond /></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse lista" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item item">
                <a className="nav-link" href="#">Collares</a>
              </li>
              <li className="nav-item item">
                <a className="nav-link item lineas" href="#">Aros</a>
              </li>
              <li className="nav-item item">
                <a className="nav-link lineas" href="#">Anillos y pusleras</a>
              </li>
              <li className="nav-item dropdown item">
                <a className="nav-link dropdown-toggle lineas" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Relojes
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <li><a className="dropdown-item item" href="#">Hombre</a></li>
                  <li><a className="dropdown-item item" href="#">Mujer</a></li>

                </ul>
              </li>

              <Cart />

            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export { NavBar }