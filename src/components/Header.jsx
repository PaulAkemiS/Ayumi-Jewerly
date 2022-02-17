import React from "react";

function Header() {
    return (
        <>
            <header>
                <div>
                    <img className="logo" src={require("../Imagenes/AYUMI.png")} alt="Diamante" />
                </div>
            </header>
        </>
    )
}

export default Header;