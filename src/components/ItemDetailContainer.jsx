import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { productos } from "./Producto";
import "../App.css";
import DoubleRingLoading from "../Imagenes/DoubleRingLoading.gif";
import { useCartContext } from "./CartContext";

const getProductos = () =>
    new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos);
        }, 2000);
    })



function ItemDetailContainer() {
    const [producto, setProducto] = useState([]);
    const [loading, setLoading] = useState(false);
    const { id } = useParams();

    useEffect(() => {
        try {
            if (id) {
                async function fetchData() {
                    const todosLosProductos = await getProductos()
                    const [productoEncontrado] = todosLosProductos.filter((producto) => id == producto.id ? producto : false);

                    setProducto(productoEncontrado);
                    setLoading(true);
                }

                fetchData();
            }
        } catch (error) {
            console.log(error);
        }

    }, [id]);

    return (
        <>
            {loading ? <ItemDetail item={producto} /> : <img className="gif" src={DoubleRingLoading} alt="loading..." />
            }

        </>
    )
}

export default ItemDetailContainer;