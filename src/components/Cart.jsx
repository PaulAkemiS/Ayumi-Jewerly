import React from "react";
import { useCartContext } from "./CartContext";
import { Link } from "react-router-dom";

function Cart() {
    const { cartItems } = useCartContext();
    console.log("Item en Carrito=>", cartItems);
    const { eliminarItem } = useCartContext();
    const { vaciarCarrito } = useCartContext();
    const { totalCompra } = useCartContext();

    return (
        <>
            {cartItems.length === 0 ? (
                <>
                    <div className="columnFlex">
                        <h1 className="titulos">Carrito Vacio</h1>
                        <Link to="/" className="regresarInicio">
                            Vuelve a ver todos nuestros productos
                        </Link>
                    </div>
                </>
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
                <>
                    <p className="totalCompra">Total $ {totalCompra()} </p>
                    <button className="btn btn-secondary btnVaciarCarrito" onClick={vaciarCarrito}>
                        Vaciar Carrito
                    </button>
                    <Link to="./finalizarcompra">
                        <button className="btn btn-secondary btnVaciarCarrito">Realizar Pago</button>
                    </Link>

                </>
            )}
        </>
    );
}

export default Cart;


