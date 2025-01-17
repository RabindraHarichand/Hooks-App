import { render, screen } from "@testing-library/react";
import { HomePage } from "../../src/09-useContext/HomePage";
import { UserContext } from "../../src/09-useContext/context/UserContext";

describe("Pruebas en HomePage", () => {
  const user = {
    id: 1,
    name: "Test",
  };

  test("debe mostrar componente sin el usuario", () => {
    render(
      <UserContext.Provider value={{ user: null }}>
        <HomePage />
      </UserContext.Provider>
    );

    const preTag = screen.getByLabelText("pre"); //aria-label

    expect(preTag.innerHTML).toBe("null");
  });

  test("debe mostrar componente con el usuario", () => {
    render(
      <UserContext.Provider value={{ user }}>
        <HomePage />
      </UserContext.Provider>
    );

    const preTag = screen.getByLabelText("pre"); //aria-label

    console.log(preTag.innerHTML);

    expect(preTag.innerHTML).toContain(JSON.stringify(user, null, 3));
    expect(preTag.innerHTML).toContain(user.name);
    expect(preTag.innerHTML).toContain(`${user.id}`);
  });
});
