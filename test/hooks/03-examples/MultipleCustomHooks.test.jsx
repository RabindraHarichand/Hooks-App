import { fireEvent, render, screen } from "@testing-library/react";
import { MultipleCustomHooks } from "../../../src/03-examples/MultipleCustomHooks";
import { useFetch } from "../../../src/hooks/useFetch";
import { useCounter } from "../../../src/hooks/useCounter";

jest.mock("../../../src/hooks/useFetch");

jest.mock("../../../src/hooks/useCounter");

describe("Pruebas en MultipleCustomHooks", () => {
  const mockIncrement = jest.fn();
  useCounter.mockReturnValue({ counter: 1, increment: mockIncrement });

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("debe mostrar el componente por defecto", () => {
    useFetch.mockReturnValue({
      data: null,
      isLoading: true,
      hasError: false,
      error: null,
    });

    render(<MultipleCustomHooks />);

    expect(screen.getByText("Cargando"));
    expect(screen.getByText("Informacion de pokemon"));

    //Este test comentado corresponde a un test del curso pasado que tiene cosas que yo no tengo,
    //Lo deje porque me parecio pertinente para ver como evaluar si un boton esta desabilitado
    // const newtButton = screen.getByRole('button', {name: 'Anterior'})

    // expect(neextButton.disabled).toBe(true);
  });

  test("debe mostrar un nombre de pokemon", () => {
    useFetch.mockReturnValue({
      data: {
        id: 1,
        name: "Bulbasaur",
        sprites: {
          front_default: "https://1",
          front_shiny: "https://2",
          back_default: "https://3",
          back_shiny: "https://4",
        },
      },
      isLoading: false,
      hasError: false,
      error: null,
    });

    render(<MultipleCustomHooks />);

    expect(screen.getByText("#1 - Bulbasaur")).toBeTruthy();
  });

  test("debe llamar la funcion de incrementar", () => {
    useFetch.mockReturnValue({
      data: {
        id: 1,
        name: "Bulbasaur",
        sprites: {
          front_default: "https://1",
          front_shiny: "https://2",
          back_default: "https://3",
          back_shiny: "https://4",
        },
      },
      isLoading: false,
      hasError: false,
      error: null,
    });

    render(<MultipleCustomHooks />);
    const nextButton = screen.getByRole("button", { name: "Siguiente" });

    fireEvent.click(nextButton);

    expect(mockIncrement).toHaveBeenCalled();
  });
});
