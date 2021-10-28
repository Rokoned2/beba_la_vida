import React, { useReducer } from "react";
import { CartReducer } from "./CartReducer";

const initialState = {
  cart: [],
  total: 0,
  amount: 0,
};
export const StateContext = React.createContext();
export const DispatchContext = React.createContext();

export const CartContext = ({ children }) => {
  const [state, dispatch] = useReducer(CartReducer, initialState);
  return (
    <DispatchContext.Provider value={dispatch}>
      <StateContext.Provider
        value={{
          state,
        }}
      >
        {children}
      </StateContext.Provider>
    </DispatchContext.Provider>
  );
};
