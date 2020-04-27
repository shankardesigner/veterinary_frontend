import React, { useReducer, useContext, useState } from "react";

const initialState = 0;

export const counterReducer = (state, action) => {
  switch (action) {
    case "incr":
      return state + 1;
    case "dcr":
      return state - 1;
    case "reset":
      return initialState;
    default:
      return state;
  }
};

function UseReducerExample() {
  const [state, dispatch] = useReducer(counterReducer, initialState);
  return (
    <div>
      {state}
      <button onClick={() => dispatch("incr")}>Increment</button>
      <button onClick={() => dispatch("dcr")}>Decrement</button>
      <button onClick={() => dispatch("reset")}>Reset</button>
    </div>
  );
}

export default UseReducerExample;
