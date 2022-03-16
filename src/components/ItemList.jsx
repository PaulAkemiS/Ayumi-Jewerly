import React from "react";
import Item from "./Item";

function ItemList({ productos }) {
    return (

        <div key={productos.id} className="flexProductos">
            {productos && productos.map((p) => {
                return <Item item={p} />
            })}
        </div>


    )
}

export default ItemList;
