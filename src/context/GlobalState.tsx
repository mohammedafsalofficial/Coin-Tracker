import React, { ReactNode, createContext, useReducer } from "react";
import reducerFunction from "./AppReducer";

interface Transaction {
  id: number;
  text: string;
  amount: number;
}

export interface TransactionState {
  transactions: Transaction[];
}

interface ContextProviderProps {
  children: ReactNode;
}

export interface Action {
  type: string;
  payload: number;
}

// Initial state
const initialState: TransactionState = {
  transactions: [
    { id: 1, text: "Flower", amount: -20 },
    { id: 2, text: "Salary", amount: 300 },
    { id: 3, text: "Mobile", amount: -80 },
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
