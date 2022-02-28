import React, { useState } from "react";
import "../App.css";
import BtnTerminarCompra from "./BtnTerminarCompra";
import ItemCount from "./ItemCount";

function ItemDetail({ item }) {
    const [show, setShow] = useState(true);

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
                    {show === true ?
                        <div>
                            <ItemCount stock={item.stock} initial={1} />
                            <div className="btnFlex">
                                <button type="button" className="btn btn-light btnDetail" condition disabled={show ? "" : "disabled"} onClick={() => { setShow(false) }}>Agregar al carrito</button>
                                <button type="button" className="btn btn-light btnDetail">Volver</button>
                            </div>
                        </div> :
                        <div>
                            <BtnTerminarCompra />
                        </div>
                    }
                </div>
            </div>
        </>
    )
}

export default ItemDetail;