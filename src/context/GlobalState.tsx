import React, { ReactNode, createContext, useReducer } from "react";
import reducerFunction from "./AppReducer";

type Transaction = {
  id: number;
  text: string;
  amount: number;
};

export type TransactionState = {
  transactions: Transaction[];
};

type ContextProviderProps = {
  children?: ReactNode;
};

export type Action = {
  type: string;
  payload: number;
};

// Initial state
const initialState: TransactionState = {
  transactions: [
    { id: 1, text: "Flower", amount: -10 },
    { id: 2, text: "Salary", amount: 1000 },
    { id: 3, text: "Mobile", amount: -150 },
  ],
};

// Create the context
export const GlobalContext = createContext(initialState);

export const GlobalContextProvider: React.FC<ContextProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(reducerFunction, initialState);

  return (
    <GlobalContext.Provider value={{ transactions: state.transactions }}>
      {children}
    </GlobalContext.Provider>
  );
};
