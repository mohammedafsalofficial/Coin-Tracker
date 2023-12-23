import { createContext } from "react";

interface Transaction {
  id: number;
  text: string;
  amount: number;
}

interface InitialState {
  transactions: Transaction[];
}

// Initial state
const initialState: InitialState = {
  transactions: [
    { id: 1, text: "Flower", amount: -100 },
    { id: 2, text: "Salary", amount: 30000 },
    { id: 3, text: "Mobile", amount: -20000 },
  ],
};

// Create the context
export const GlobalContext = createContext(initialState);
