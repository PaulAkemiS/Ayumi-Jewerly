import React, { useState } from "react";
import "../App.css";
import BtnTerminarCompra from "./BtnTerminarCompra";
import { Link } from "react-router-dom";
import { useCartContext } from "./CartContext";
import ItemCount from "./ItemCount";

function ItemDetail({ item }) {
    const [show, setShow] = useState(true);
    const [contador, setContador] = useState(0);
    const { addItem } = useCartContext();

    const incrementar = () => {
        if (contador < item.stock) {
            setContador(contador + 1);
        }
    };

    const restar = () => {
        if (contador > 0) {
            setContador(contador - 1);
        }
    };

    function dobleFuncion() {
        setShow(false);
        addItem(item, contador);
    }

    return (
        <>
            <div className="flexDetail">
                <div>
                    <h5 className="tituloDetail">{item.nombre}</h5>
                    <img className="imagenDetail" src={item.imagen} alt="ERROR"></img>
                </div>
                <div>
                    <p className="itemDetail">$ {item.precio}</p>
                    <p className="itemDetail">{item.descripcion}</p>
                    {show === true ? (
                        <div>
                            <ItemCount clickMenos={restar} count={contador} clickMas={incrementar} />


                            <div className="btnFlex">
                                <button type="button" className="btn btn-light btnDetail" condition disabled={show ? "" : "disabled"} onClick={dobleFuncion}>Agregar al carrito</button>
                                <Link to="/">
                                    <button type="button" className="btn btn-light btnDetail">Volver</button>
                                </Link>
                            </div>
                        </div>
                    ) : (
                        <div>
                            <BtnTerminarCompra />

                            <Link to="/">
                                <button className="btn btn-secondary btnDetail btnContinuarCompra">Continuar Comprando</button>
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}

export default ItemDetail;