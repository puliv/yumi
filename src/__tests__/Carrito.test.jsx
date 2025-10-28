import { render, screen, fireEvent } from "@testing-library/react";
import { beforeEach, describe, expect, test, vi } from "vitest";
import Carrito from "../components/Carrito"; // Asegúrate de ajustar la ruta
import Swal from "sweetalert2";
import "@testing-library/jest-dom";

// datos de prueba
const MOCK_CARRITO = [
  { id: 1, nombre: "Producto A", precio: 1000, cantidad: 2, imagen: "a.jpg" },
  { id: 2, nombre: "Producto B", precio: 500, cantidad: 1, imagen: "b.jpg" },
];

vi.mock("sweetalert2", () => ({
  default: {
    fire: vi.fn((config) => {
      return Promise.resolve({ isConfirmed: config.showCancelButton });
    }),
  },
}));

describe("Carrito Componente", () => {
  const mockSetMostrarCarrito = vi.fn();
  const mockIncrementar = vi.fn();
  const mockDisminuir = vi.fn();
  const mockVaciar = vi.fn();
  const mockEliminar = vi.fn();

  const defaultProps = {
    carrito: MOCK_CARRITO,
    mostrarCarrito: true,
    setMostrarCarrito: mockSetMostrarCarrito,
    incrementarCantidad: mockIncrementar,
    disminuirCantidad: mockDisminuir,
    vaciarCarrito: mockVaciar,
    eliminarProducto: mockEliminar,
  };

  beforeEach(() => {
    vi.clearAllMocks();
    render(<Carrito {...defaultProps} />);
  });

  test("calcula y muestra el total correcto", () => {
    // total esperado: (1000 * 2) + (500 * 1) = 2500
    expect(screen.getByText(/Total: \$2\.500/i)).toBeInTheDocument();
  });

  test("llama a incrementarCantidad al hacer click en '+'", () => {
    const incrementarButton = screen.getAllByText("+")[0]; // Toma el botón del Producto A
    fireEvent.click(incrementarButton);
    expect(mockIncrementar).toHaveBeenCalledWith(MOCK_CARRITO[0].id); // id: 1
  });

  test("llama a disminuirCantidad al hacer click en '-'", () => {
    const disminuirButton = screen.getAllByText("-")[0]; // Toma el botón del Producto A
    fireEvent.click(disminuirButton);
    expect(mockDisminuir).toHaveBeenCalledWith(MOCK_CARRITO[0].id); // id: 1
  });

});
