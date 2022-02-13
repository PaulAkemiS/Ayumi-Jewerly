import React from "react";
import { BsCart2 } from 'react-icons/bs';
import "../App.css";

function CartWidget() {
    return (

        <li className="nav-item item">
            <a className="nav-link item" href="#"><BsCart2 className="cart lineas" /></a>
        </li>
    )

}

export default CartWidget