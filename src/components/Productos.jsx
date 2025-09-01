import React, { Component } from 'react'
import productos from "../data/productos";
import "../style/Productos.css";

export const Productos = () => {
    return (
    <>
    <div className="container mt-4">
        <div className="row">
            <div className="col-2 col-md-2 mb-4">
            </div>
            <div className="col-10 col-md-12">
                <h1 className="mb-4 text-center">Lista de Productos</h1>
                <div className="row">
                    {productos.map((producto) => (
                        <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4" key={producto.id}>
                            <div className="card h-100 card-hover">
                                <img
                                    src={producto.imagen}
                                    className="card-img-top"
                                    alt={producto.nombre}
                                    style={{objectFit: "cover", width: "100%", height: "150px"}} />
                                <div className="card-body text-center">
                                    <h5 className="fw-semibold">{producto.nombre} <span className="texto-gris">
                                        {producto.marca}, {producto.cantidad}</span></h5>
                                </div>
                                <div className="text-start">
                                    <h4>${producto.precio.toLocaleString("es-CL")}</h4>
                                </div>
                                <div className="text-start">
                                    <p className="texto-gris">{producto.info}{(2*producto.precio).toLocaleString("es-CL")}</p>
                                </div>
                                <div className="text-center">
                                    <button className="button-hover">Agregar al carrito</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
    </>
    )
}