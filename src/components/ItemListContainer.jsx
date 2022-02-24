import React, { useEffect, useState } from "react";
import { traerProductos } from "./Producto";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import "../App.css"



function ItemListContainer() {

    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);
    const { categoria } = useParams();

    useEffect(() => {
        try {
            if (categoria) {
                traerProductos.then((res) => {
                    let resultado = res.filter((elemento) => {
                        let mostrarProducto = "";
                        if (elemento.categoria === categoria) {
                            mostrarProducto = elemento;
                        }

                        return mostrarProducto;
                    });

                    setProductos(resultado);
                    setLoading(false);
                });
            }
        } catch (error) {
            console.log(error);
        }
    }, [categoria]);


    return (
        <>
            {loading ? (
                <h1 className="cargando">Cargando...</h1>
            ) : (
                <section>
                    <h1 className="titulo">Collares</h1>
                    <ItemList productos={productos} />
                </section>
            )}
        </>
    )
}

export default ItemListContainer;