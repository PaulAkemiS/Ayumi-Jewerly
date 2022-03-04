import React, { useState, createContext, useContext } from "react";

const CartContext = createContext();
const useCartContext = () => useContext(CartContext);

function CartProvider({ children }) {
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0);

    // const addItem = (item, cantidad) => {
    //     if (cartItems.some((producto) => producto.id == item.id)) {
    //         const copy = [...cartItems];
    //         const itemRepetido = cartItems.findIndex((producto) => producto.id == item.id);
    //         copy[itemRepetido] = { ...copy[itemRepetido], cantidad: copy[itemRepetido].cantidad + cantidad };

    //         setCartItems(copy);
    //         setCartCount((prev) => prev + cantidad);
    //     } else {
    //         setCartItems([...cartItems, { ...item, cantidad }]);
    //         setCartCount((prev) => prev + cantidad);
    //     }
    // };

    const addItem = (item, cantidad) => {
        if (cartItems.some((producto) => producto.id == item.id)) {
            const copy = [...cartItems];
            const itemRepetido = cartItems.findIndex((producto) => producto.id == item.id);
            copy[itemRepetido] = { ...copy[itemRepetido], cantidad: copy[itemRepetido].cantidad + cantidad };

            setCartItems(copy);
            setCartCount((prev) => prev + cantidad);
        } else {
            setCartItems([...cartItems, { ...item, cantidad }]);
            setCartCount((prev) => prev + cantidad);
        }
    };

    const vaciarCarrito = () => {
        setCartItems([]);
        setCartCount(0);
    };
    // const isInCart = (id) => {
    //   return cartItems.find((e) => e.item.id === id);
    // };

    const eliminarItem = (id) => {
        const nuevoCarrito = [...cartItems].map((item) => item.id !== id);
        setCartItems(nuevoCarrito);
        // setCartCount((prev) => prev - );
        console.log(nuevoCarrito);
    };

    // const eliminarItem = (id) => {
    //     const carritoNuevo = cartItems.filter((e) => e.id !== id);
    //     setCartItems(carritoNuevo)
    // }

    return <CartContext.Provider value={{ cartItems, cartCount, addItem, eliminarItem, vaciarCarrito }}>{children}</CartContext.Provider>;
}

export { CartContext };
export { useCartContext };
export { CartProvider };