import React from "react";
import ItemCount from "./ItemCount";

function ItemListContainer(props) {
    return (
        <>
            <h1 style={{
                fontSize: "50",
                textAlign: "center",
                marginTop: "25px"

            }}>
                {props.title}
            </h1>

            <div>
                <div className="card" style={{
                    width: "18rem"
                }}>
                    <img src="https://d3ugyf2ht6aenh.cloudfront.net/stores/001/183/960/products/img-20201114-wa00051-247639da61aa4a2db816062401493957-1024-1024.jpg" className="card-img-top" alt="ERROR" />
                    <div className="card-body">
                        <h5 className="card-title">Gargantilla de plata</h5>
                        <p className="card-text">$3000</p>
                        <ItemCount stock={5} initial={1} />
                        <button type="button" className="btn btn-light">Agregar al carrito</button>
                    </div>
                </div>
            </div>

        </>
    )
}

export default ItemListContainer