import React from "react";

function ItemList(props) {
    return (
        <>
            <h1 style={{
                fontSize: "50",
                textAlign: "center",
                marginTop: "25px"

            }}>
                {props.title}
            </h1>
            <h2>
                {props.text}
            </h2>
            <div>
                <img src={require("../Imagenes/diamante2.png")} alt="foto" />
            </div>

        </>
    )
}

export default ItemList