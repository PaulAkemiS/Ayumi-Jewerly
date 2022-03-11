import React from "react";
import { BsCart2 } from 'react-icons/bs';
import { Link } from "react-router-dom";
import { useCartContext } from "./CartContext";
import "../App.css";



const CartWidget = ({ cantidad }) => {
    const { cartCount } = useCartContext();

    if (cartCount === 0) {
        return "";
    } else {
        return (
            <>
                <li className="nav-item">
                    <Link to="/carrito" className="nav-link navbar" aria-current="page" href="#">
                        <BsCart2
                            style={{
                                width: "65",
                                height: "40",
                            }}
                        />
                        <span>
                            <button className="numeroCarrito">{cantidad}</button>
                        </span>
                    </Link>
                </li>
            </>
        );
    }
};


export default CartWidget;