import React, { useState } from "react";
import { useForm } from "../hooks/useForm";

export const TodoAdd = ({ onNewTodo }) => {
  const { description, onInputChange, onResetForm } = useForm({
    description: "",
  });

  const onFormSubmit = (event) => {
    event.preventDefault();

    if (description.trim().length <= 1) return;

    const newTodo = {
      id: new Date().getTime(),
      description: description.trim(),
      done: false,
    };

    onNewTodo(newTodo);
    onResetForm();
  };
  return (
    <>
      {/* {id: new Date()..., description:'lo que puse en la caja de texto',done:false}*/}
      <form onSubmit={onFormSubmit}>
        <input
          type="text"
          placeholder="Que hay que hacer"
          className="form-control"
          name="description"
          value={description}
          onChange={onInputChange}
        />

        <button type="submit" className="btn btn-outline-primary mt-1">
          Agregar
        </button>
      </form>
    </>
  );
};
