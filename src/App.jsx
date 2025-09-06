import { useState, useEffect } from "react";
import Productos from "./components/Productos";
import Carrito from "./components/Carrito";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Contacto from "./components/Contacto";
import Home from "./components/Home";
import QuienesSomos from "./components/QuienesSomos";
import Footer from "./components/Footer";
import "./style/App.css";
import "./style/layout.css";

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
      const existente = prev.find((item) => item.id === producto.id);
      if (existente) {
        return prev.map((item) =>
          item.id === producto.id
            ? { ...item, cantidad: item.cantidad + 1 }
            : item
        );
      } else {
        return [...prev, { ...producto, cantidad: 1 }];
      }
    });
  };

  // Incrementar cantidad
  const incrementarCantidad = (id) => {
    setCarrito((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, cantidad: item.cantidad + 1 } : item
      )
    );
  };

  // Disminuir cantidad (si llega a 0 se elimina)
  const disminuirCantidad = (id) => {
    setCarrito((prev) =>
      prev
        .map((item) =>
          item.id === id ? { ...item, cantidad: item.cantidad - 1 } : item
        )
        .filter((item) => item.cantidad > 0)
    );
  };

  // Eliminar un producto por ID
  const eliminarProducto = (id) => {
    setCarrito((prev) => prev.filter((item) => item.id !== id));
  };

  // Función para vaciar el carrito
  const vaciarCarrito = () => {
    setCarrito([]);
  };
  return (
    <Router>
      <div className="App">                           {/* Contenedor principal de la aplicación */}
        <Navbar />                                    {/* Navbar siempre visible */}
        <div className="layout">                      {/* Contenedor para el contenido de la página */}
          <Routes>                                    {/* Rutas para contenido dinámico */}
            <Route path="/" element={<Home />} />
            <Route path="/contacto" element={<Contacto />} />
          </Routes>
        </div>
        <Footer /> {/* Footer siempre visible */}
      </div>
    </Router>
  );
}

export default App;
