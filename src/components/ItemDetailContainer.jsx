import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { productos } from "./Producto";
import "../App.css";

console.log(productos)




const getItem = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(productos);
    }, 2000);
});

function ItemDetailContainer() {
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(false);
    const { id } = useParams();

    useEffect(() => {
        try {
            if (id) {
                getItem.then((res) => {
                    let resultado = res.filter((elemento) => {
                        let mostrarDetalle;
                        if (id === elemento.id) {
                            mostrarDetalle = elemento;
                        }
                        console.log(typeof elemento)
                        return mostrarDetalle;
                    });

                    console.log(resultado)
                    setProductos(resultado);
                    setLoading(true);

                });
            }
        } catch (error) {
            console.log(error);
        }

    }, [id]);
    return (

        <>
            {loading ? <ItemDetail item={productos} /> : <h1>Cargando</h1>}

        </>
    )
}

export default ItemDetailContainer;