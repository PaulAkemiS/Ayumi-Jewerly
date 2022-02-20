import React, { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import { collares } from "./Producto";
import "../App.css";

const getItem = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(collares);
    }, 2000);
});

function ItemDetailContainer() {
    const [collares, setCollares] = useState([]);
    const [cargando, setCargando] = useState(false);

    useEffect(() => {
        getItem.then((res) => {
            setCollares(res);
        })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
                setCargando(true);
            });
    }, []);

    return (
        <>
            {cargando ? <ItemDetail item={collares[0]} /> : <h1>Cargando</h1>}

        </>
    )
}

export default ItemDetailContainer;