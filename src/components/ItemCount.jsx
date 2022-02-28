import React, { useState } from "react";
import "../App.css"


function ItemCount({ stock, initial }) {

    const [contador, setContador] = useState(initial);

    function suma() {
        if (contador < stock) {
            setContador(contador + 1)
        }
    }

    const resta = () => {
        if (contador > 0) {
            setContador(contador - 1)
        }
    }

    return (
        <>
            <div className="contador">
                <button type="button" className="btn btn-secondary" onClick={resta}>-</button>
                <p>{contador}</p>
                <button type="button" className="btn btn-secondary" onClick={suma}>+</button>
            </div>
        </>
    )
}

export default ItemCount;