import React from "react";
import "../App.css"
import ItemCount from "./ItemCount";

const Item = ({ item }) => {
    return (

        <div key={item.id} className="card" style={{ width: "18rem" }}>
            <img src={item.imagen} className="card-img-top" alt="ERROR" />
            <div className="card-body">
                <h5 className="card-title">{item.nombre}</h5>
                <p className="card-text">{item.precio}</p>
                <ItemCount stock={item.stock} initial={1} />
                <button type="button" className="btn btn-light">Agregar al carrito</button>
            </div>
        </div>

    );
};

export default Item;
