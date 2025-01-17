import { render, screen } from "@testing-library/react";
import { MultipleCustomHooks } from "../../../src/03-examples/MultipleCustomHooks";

describe("Pruebas en MultipleCustomHooks", () => {
  test("debe mostrar el componente por defecto", () => {
    render(<MultipleCustomHooks />);

    expect(screen.getByText("Cargando"));
    expect(screen.getByText("Informacion de pokemon"));

    //Este test comentado corresponde a un test del curso pasado que tiene cosas que yo no tengo,
    //Lo deje porque me parecio pertinente para ver como evaluar si un boton esta desabilitado
    // const newtButton = screen.getByRole('button', {name: 'Anterior'})

    // expect(neextButton.disabled).toBe(true);

    screen.debug();
  });
});
