import React from "react";


function ItemCount({ clickMenos, count, clickMas }) {

    return (
        <>
            <div className="contador">
                <button type="button" className="btn btn-secondary" onClick={clickMenos}>-</button>
                <p style={{ color: "black" }}>{count}</p>
                <button type="button" className="btn btn-secondary" onClick={clickMas}>+</button>
            </div>
        </>
    )
}

export default ItemCount;