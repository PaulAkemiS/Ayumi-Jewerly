import React from "react";
import { Link } from "react-router-dom";
import "../App.css"

function Header() {
    return (
        <>
            <header>
                <div>
                    <Link to="/">
                        <img className="logo" src={require("../Imagenes/AYUMI.png")} alt="Diamante" />
                    </Link>
                </div>
            </header>
        </>
    )
}

export default Header;