import React from "react";
import { useFetch } from "../hooks";

export const MultipleCustomHooks = () => {
  const { data, hasError, isLoading } = useFetch(
    "https://pokeapi.co/api/v2/pokemon/104"
  );

  return (
    <>
      <h1>Informacion de pokemon</h1>
      <hr />
      {isLoading && <p> Cargando...</p>}
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
      <h2>{data?.name}</h2>
    </>
  );
};
