import { useState } from "react";
import productos from "../data/productos";
import "../style/Productos.css";

export const Productos = ({ agregarProducto }) => {
    // Estado para la categoría seleccionada
    const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("todos");

    // Obtener categorías únicas desde los datos
    const categorias = ["todos", ...new Set(productos.map((p) => p.categoria))];

    // Filtrar productos según categoría
    const productosFiltrados =
    categoriaSeleccionada === "todos"
        ? productos
        : productos.filter((p) => p.categoria === categoriaSeleccionada);
    return (
    <div className="container">
        <div className="row">
            <h1 className="mb-4 text-center">Lista de Productos</h1>
            {/* Botones de categorías */}
            <div className="text-center mb-4">
                {categorias.map((categ) => (
                <button key={categ} className={`boton-pag ${categoriaSeleccionada === categ ? "active" : ""}`}
                    onClick={() => setCategoriaSeleccionada(categ)}>
                    {categ.charAt(0).toUpperCase() + categ.slice(1)}
                </button>
                ))}
            </div>

            {/* Lista de productos */}
            <div className="row">
                {productosFiltrados.map((producto) => (
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4" key={producto.id}>
                        <div className="card h-100 card-hover">
                            <img
                                src={producto.imagen}
                                className="card-img-top img-producto"
                                alt={producto.nombre}
                                style={{objectFit: "cover", width: "100%", height: "200px"}} />
                            <div className="card-body text-center">
                                <h5 className="fw-semibold">{producto.nombre} <span className="texto-gris">
                                    {producto.cantidad}</span></h5>
                            </div>
                            <div className="text-start">
                                <h4>${producto.precio.toLocaleString("es-CL")}</h4>
                            </div>
                            <div className="text-start texto-gris">
                                <h6>{producto.marca}</h6>
                            </div>
                            <div className="text-center mt-2">
                                <button className="button-hover" onClick={() => agregarProducto(producto)}>
                                    Agregar al carrito
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
                
                {/* Si no hay productos en esa categoría */}
                {productosFiltrados.length === 0 && (
                    <p className="text-center">No hay productos en esta categoría.</p>
                )}
            </div>
        </div>
    </div>
    );
};

export default Productos;