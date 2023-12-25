import React, { ReactNode, createContext, useReducer } from "react";
import reducerFunction from "./AppReducer";

type Transaction = {
  id: number;
  text: string;
  amount: number;
};

export type Transactions = {
  transactions: Transaction[];
};

type ContextProviderProps = {
  children?: ReactNode;
};

// Initial state
const initialState: Transactions = {
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

  const deleteTransaction = (id: number): void => {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    });
  };

  return (
    <GlobalContext.Provider value={{ transactions: state.transactions, deleteTransaction }}>
      {children}
    </GlobalContext.Provider>
  );
};
