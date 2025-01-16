import React from "react";
import { TodoItem } from "./TodoItem";

export const TodoList = ({ todos = [] }) => {
  return (
    <>
      <ul className="list-group">
        {todos.map((todo) => (
          //TodoItem ... mandar informacion para que se muestre las descripcion que tenemos en el todo
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
    </>
  );
};
