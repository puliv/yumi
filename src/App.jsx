import { useState, useEffect } from "react";
import Productos from "./components/Productos";
import Carrito from "./components/Carrito";
import "./style/App.css";

function App() {
  
  // Se comprueba si existe un carrito almacenado
  const [carrito, setCarrito] = useState(() => {
    const almacenado = localStorage.getItem("carrito");
    return almacenado ? JSON.parse(almacenado) : [];
  });

  // Estado para mostrar/ocultar el modal
  const [mostrarCarrito, setMostrarCarrito] = useState(false);

  // Se guarda carrito en localStorage cada vez que cambie
  useEffect(() => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
  }, [carrito]);

  // Agregar producto (si ya existe, solo aumenta cantidad)
  const agregarProducto = (producto) => {
    setCarrito((prev) => {
      const existente = prev.find(item => item.id === producto.id);
      if (existente) {
        return prev.map(item =>
          item.id === producto.id ? { ...item, cantidad: item.cantidad + 1 } : item
        );
      } else {
        return [...prev, { ...producto, cantidad: 1 }];
      }
    });
  };

  // Incrementar cantidad
  const incrementarCantidad = (id) => {
    setCarrito(prev =>
      prev.map(item =>
        item.id === id ? { ...item, cantidad: item.cantidad + 1 } : item
      )
    );
  };

  // Disminuir cantidad (si llega a 0 se elimina)
  const disminuirCantidad = (id) => {
    setCarrito(prev =>
      prev
        .map(item => item.id === id ? { ...item, cantidad: item.cantidad - 1 } : item)
        .filter(item => item.cantidad > 0)
    );
  };

  // Eliminar un producto por ID
  const eliminarProducto = (id) => {
    setCarrito(prev => prev.filter(item => item.id !== id));
  };

  // Función para vaciar el carrito
  const vaciarCarrito = () => {
    setCarrito([]);
  };
  return (
    <>
      <Productos carrito={carrito} agregarProducto={agregarProducto} />
      <Carrito 
        carrito={carrito}
        mostrarCarrito={mostrarCarrito}
        setMostrarCarrito={setMostrarCarrito}
        incrementarCantidad={incrementarCantidad}
        disminuirCantidad={disminuirCantidad}
        eliminarProducto={eliminarProducto}
        vaciarCarrito={vaciarCarrito}
      />
      
      {/* Botón flotante que aparece solo cuando el carrito está cerrado */}
      {!mostrarCarrito && (
        <button
          className="btn btn-primary boton-flotante"
          onClick={() => setMostrarCarrito(true)}
        >
        <i className="bi bi-cart" style={{ fontSize: "2rem" }}></i>
        {carrito.reduce((acc, item) => acc + item.cantidad, 0) > 0 && (
          <span className="badge bg-danger position-absolute top-0 start-100 translate-middle">
            {carrito.reduce((acc, item) => acc + item.cantidad, 0)}
          </span>
        )}
        </button>
      )}
    </>
  );
}

export default App;
