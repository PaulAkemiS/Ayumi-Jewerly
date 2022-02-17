import React from "react";
import Item from "./Item";

function ItemList({ collares }) {
    return (
        <>
            <div className="flexProductos">
                {collares && collares.map((c) => {
                    return <Item item={c} />
                })}
            </div>

        </>
    )
}

export default ItemList
