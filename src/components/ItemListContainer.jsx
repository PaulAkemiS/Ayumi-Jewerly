import React, { useEffect, useState } from "react";
import { traerCollares } from "./Producto";
import ItemList from "./ItemList";
import "../App.css"



function ItemListContainer() {

    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        traerCollares
            .then((res) => {
                setProductos(res);
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);


    return (
        <>
            {loading ? (
                <h1 className="cargando">Cargando...</h1>
            ) : (
                <section>
                    <h1 className="titulo">Collares</h1>
                    <ItemList collares={productos} />
                </section>
            )}
        </>
    )
}

export default ItemListContainer