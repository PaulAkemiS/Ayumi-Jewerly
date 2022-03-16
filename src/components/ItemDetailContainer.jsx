import React, { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import db from "../services/firebase";
import "../App.css";
import DoubleRingLoading from "../Imagenes/DoubleRingLoading.gif";


function ItemDetailContainer() {
    const [producto, setProducto] = useState([]);
    const [loading, setLoading] = useState(false);
    const { id } = useParams();

    const getElegido = async () => {
        try {
            const document = doc(db, "Items", id);
            const response = await getDoc(document);
            const result = { id: response.id, ...response.data() };
            setProducto(result);
            setLoading(true);
        } catch (error) {
            console.log("error", error);
        }
    };

    useEffect(() => {
        getElegido();
    }, [id]);

    return <>{loading ? <ItemDetail item={producto} /> : <img className="gif" src={DoubleRingLoading} alt="loading..."></img>}</>;
}

export default ItemDetailContainer;




//     const getProductos = () =>
//     new Promise((resolve) => {
//         setTimeout(() => {
//             resolve(productos);
//         }, 2000);
//     })



//     useEffect(() => {
//         try {
//             if (id) {
//                 async function fetchData() {
//                     const todosLosProductos = await getProductos()
//                     const [productoEncontrado] = todosLosProductos.filter((producto) => id == producto.id ? producto : false);

//                     setProducto(productoEncontrado);
//                     setLoading(true);
//                 }

//                 fetchData();
//             }
//         } catch (error) {
//             console.log(error);
//         }

//     }, [id]);

//     return (
//         <>
//             {loading ? <ItemDetail item={producto} /> : <img className="gif" src={DoubleRingLoading} alt="loading..." />
//             }

//         </>
//     )
// }
