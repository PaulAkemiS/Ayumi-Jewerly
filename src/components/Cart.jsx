import React from "react";
import { useCartContext } from "./CartContext";

function Cart() {
    const { cartItems } = useCartContext();
    const { eliminarItem } = useCartContext();
    const { vaciarCarrito } = useCartContext();
    return (
        <>
            {cartItems.lrngth === 0 ? (
                <h1 className="titulos">Carrito Vacio</h1>
            ) : (
                cartItems.map((i) => {
                    return (
                        <>
                            <div className="flexCarrito">
                                <img className="imgCarrito" src={i.imagen} alt="ERROR" />
                                <p className="descripcionCarrito">
                                    {i.nombre} x {i.cantidad} Total = $ {i.precio * i.cantidad}
                                </p>
                                <button className="btn btn-light btnCarrito" onClick={() => eliminarItem(i.id, i.cantidad)}>
                                    Eliminar
                                </button>
                            </div>
                        </>
                    );
                })
            )}
            {cartItems.legth === 0 ? (
                ""
            ) : (
                <button className="btn btn-secondary btnVaciarCarrito" onClick={vaciarCarrito}>
                    Vaciar Carrito
                </button>
            )}
        </>
    );
}

export default Cart;