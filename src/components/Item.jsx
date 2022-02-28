import React from "react";
import "../App.css"
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";

const Item = ({ item }) => {
    return (

        <div key={item.id} className="card" style={{ width: "18rem" }}>
            <Link to={`/productos/${item.id}`}>
                <img src={item.imagen} className="card-img-top" alt="ERROR" />
            </Link>
            <div className="card-body">
                <Link className="card-title" to={`/productos/${item.id}`}>
                    <h5 className="card-title">{item.nombre}</h5>
                </Link>
                <p className="card-text">{item.precio}</p>
                <ItemCount stock={item.stock} initial={1} />
                <button type="button" className="btn btn-light">Agregar al carrito</button>
            </div>
        </div>

    );
};

export default Item;
