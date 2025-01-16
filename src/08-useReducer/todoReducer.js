export const todoReducer = (initialState = [], action) => {
  switch (action) {
    case "ABC":
      throw new Error("Action.type = ABC no esta implementada");

    default:
      return initialState;
  }
};
