import { render, screen, fireEvent } from "@testing-library/react";
import ContactForm from "../components/ContactForm";
import Swal from "sweetalert2";
import { beforeEach, describe, expect, test, vi } from "vitest";
import "@testing-library/jest-dom";

vi.mock("sweetalert2", () => ({
  default: {
    fire: vi.fn(),
  },
}));

describe("ContactForm", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  test("muestra error si el email está vacío", () => {
    render(<ContactForm />);

    const button = screen.getByRole("button", { name: /enviar/i });
    fireEvent.click(button);

    expect(Swal.fire).toHaveBeenCalledWith(
      expect.objectContaining({
        title: "Error",
        text: "Por favor, ingresa un correo electrónico.",
        icon: "error",
      })
    );
  });

  test("muestra error si el mensaje está vacío", () => {
    render(<ContactForm />);

    fireEvent.change(screen.getByPlaceholderText(/correo@mail\.com/i), {
      target: { value: "valido@mail.com" },
    });

    const button = screen.getByRole("button", { name: /enviar/i });
    fireEvent.click(button);

    expect(Swal.fire).toHaveBeenCalledWith(
      expect.objectContaining({
        text: "Por favor, escribe un mensaje.",
      })
    );
  });
});
