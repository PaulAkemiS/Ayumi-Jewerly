import React from "react";
import "../App.css";
import ItemCount from "./ItemCount"

function ItemDetail({ item }) {
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
                    <ItemCount stock={item.stock} initial={1} />
                    <div className="btnFlex">
                        <button type="button" className="btn btn-light btnDetail">Agregar al carrito</button>
                        <button type="button" className="btn btn-light btnDetail">Volver</button>
                    </div>
                </div>
            </div>


        </>
    )
}

export default ItemDetail;