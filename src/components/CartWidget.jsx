import React from "react";
import { BsCart2 } from 'react-icons/bs';
import { Link } from "react-router-dom";
import "../App.css";

function CartWidget({ cantidad }) {
    return (
        <>
            <li className="nav-item item">
                <Link to="./carrito" className="nav-link item" href="#"><BsCart2 className="cart lineas" />
                    <span>{cantidad}</span>
                </Link>
            </li>


        </>
    );

};

export default CartWidget