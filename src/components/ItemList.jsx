import React from "react";
import Item from "./Item";

function ItemList({ productos }) {
    return (

        <div className="flexProductos">
            {productos && productos.map((p) => {
                return <Item item={p} />
            })}
        </div>


    )
}

export default ItemList
