import React from "react";
import Swal from "sweetalert2";
import "../style/Carrito.css";

const Carrito = ({ carrito, mostrarCarrito, setMostrarCarrito, incrementarCantidad, disminuirCantidad, vaciarCarrito, eliminarProducto }) => {
    if (!mostrarCarrito) return null;

    // Calcular total del carrito
    const total = carrito.reduce((acc, item) => acc + item.precio * item.cantidad, 0);

    // Confirmación para vaciar carrito
    const handleVaciarCarrito = () => {
            Swal.fire({
            title: "¿Vaciar carrito?",
            text: "Se eliminarán todos los productos",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Sí, vaciar",
            cancelButtonText: "Cancelar",
            }).then((result) => {
            if (result.isConfirmed) {
                vaciarCarrito();
                Swal.fire("Carrito vacío", "Todos los productos fueron eliminados", "success");
            }
        });
    };

    // Confirmación para eliminar producto
    const handleEliminarProducto = (id, nombre) => {
            Swal.fire({
            title: `¿Eliminar ${nombre}?`,
            text: "Se eliminarán todos estos productos del carrito",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Sí, eliminar",
            cancelButtonText: "Cancelar",
            }).then((result) => {
            if (result.isConfirmed) {
                eliminarProducto(id);
                Swal.fire("Eliminado", `${nombre} fue eliminado del carrito.`, "success");
            }
        });
    };

    // Confirmación para realizar compra
    const handleFinalizarCompra = (total) => {
            Swal.fire({
            title: `¿Desea comprar los productos?`,
            text: `El total a pagar es de $${total.toLocaleString("es-CL")}`,
            icon: "question",
            showCancelButton: true,
            confirmButtonText: "Sí, comprar",
            cancelButtonText: "Cancelar",
            }).then((result) => {
            if (result.isConfirmed) {
                vaciarCarrito();
                Swal.fire("Pago aprobado","Productos comprados con éxito.", "success");
            }
        });
    };
    
    return (
        <div className="carrito-flotante">
            <div className="modal-content">
                <div className="modal-header mb-3">
                    <h5 className="modal-title">Mi carrito de compras</h5>
                    <button className="btn-close" onClick={() => setMostrarCarrito(false)}></button>
                </div>

                <div className="modal-body">
                    {carrito.length === 0 ? (
                        <p>Tu carrito está vacío.</p>
                    ) : (
                        <div className="carrito-lista">
                            <ul className="list-group">
                                {carrito.map((item) => (
                                <li key={item.id} 
                                    className="list-group-item d-flex justify-content-between align-items-center"
                                >
                                    <div className="d-flex align-items-center">
                                        <div className="flex-shrink-0 me-2">
                                            <img
                                            src={item.imagen}
                                            alt={item.nombre}
                                            style={{objectFit: "cover", width: "50px", height: "50px"}} />
                                        </div>
                                        <div className="flex-grow-1 text-start">
                                            <strong>{item.nombre}</strong><br />
                                            <small>${item.precio.toLocaleString("es-CL")} c/u</small>
                                        </div>
                                    </div>

                                    <div className="d-flex align-items-center">
                                        <button className="btn btn-sm btn-warning me-2" onClick={() => disminuirCantidad(item.id)}>
                                            -
                                        </button>
                                        <span>{item.cantidad}</span>
                                        <button className="btn btn-sm btn-success ms-2" onClick={() => incrementarCantidad(item.id)}>
                                            +
                                        </button>
                                        <button className="btn btn-sm btn-danger ms-3" onClick={() => handleEliminarProducto(item.id, item.nombre)}>
                                            X
                                        </button>
                                    </div>
                                </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>

                {carrito.length > 0 && (
                <div className="modal-footer d-flex flex-column align-items-center">
                    <h5 className="my-2">Total: ${total.toLocaleString("es-CL")}</h5>
                    <div className="d-flex justify-content-between w-100">
                        {/*
                        <button className="btn btn-secondary" onClick={() => setMostrarCarrito(false)}>
                            Cerrar
                        </button>
                        */}
                        <button className="btn btn-warning" onClick={handleVaciarCarrito}>
                            Vaciar carrito
                        </button>
                        <button className="btn btn-primary" onClick={() => handleFinalizarCompra(total)}>
                            Finalizar compra
                        </button>
                    </div>
                </div>
                )}
            </div>
        </div>
    );
};

export default Carrito;