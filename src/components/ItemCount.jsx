import React, { useState } from "react";
import "../App.css"


function ItemCount({ clickMenos, count, clickMas }) {


    return (
        <>
            <div className="contador">
                <button type="button" className="btn btn-secondary" onClick={clickMenos}>-</button>
                <p>{count}</p>
                <button type="button" className="btn btn-secondary" onClick={clickMas}>+</button>
            </div>
        </>
    )
}

export default ItemCount;