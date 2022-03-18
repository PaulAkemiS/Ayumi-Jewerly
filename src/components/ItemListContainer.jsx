import React, { useEffect, useState } from "react";
// import { traerProductos } from "./Producto";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import "../App.css"
import DoubleRingLoading from "../Imagenes/DoubleRingLoading.gif";
import db from "../services/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";


function ItemListContainer() {
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);
    const { categoria } = useParams();

    const getData = async () => {
        try {
            const itemCollection = collection(db, "Items");
            const col = await getDocs(itemCollection);
            const result = col.docs.map((doc) => (doc = { id: doc.id, ...doc.data() }));
            setProductos(result);
            setLoading(false);

        } catch (error) {
            console.log("error", error);
        }
    };

    const getDataCategoryQuery = async () => {
        try {
            const consulta = query(collection(db, "Items"), where("categoria", "==", categoria));
            const querySnapShot = await getDocs(consulta);

            setProductos(querySnapShot.docs.map((doc) => (doc = { id: doc.id, ...doc.data() })));
            setLoading(false);
        } catch (error) {
            console.log("error", error);
        }
    };

    useEffect(() => {
        categoria ? getDataCategoryQuery() : getData();
    }, [categoria]);



    return (
        <>
            {loading ? (
                <img className="gif" src={DoubleRingLoading} alt="loading..." />
            ) : (
                <section>
                    <ItemList productos={productos} />
                </section>
            )}
        </>
    )
}

export default ItemListContainer;




    // useEffect(() => {
    //     try {
    //         if (categoria) {
    //             traerProductos.then((res) => {
    //                 let resultado = res.filter((elemento) => {
    //                     let mostrarProducto = "";
    //                     if (elemento.categoria === categoria) {
    //                         mostrarProducto = elemento;
    //                     }

    //                     return mostrarProducto;
    //                 });

    //                 setProductos(resultado);
    //                 setLoading(false);
    //             });
    //         } else {
    //             traerProductos.then((res) => {
    //                 setProductos(res);
    //                 setLoading(false);
    //             })
    //         }
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }, [categoria]);