import { Transaction, Transactions } from "./GlobalState";

type Action = {
  type: string;
  payload: Transaction | number;
};

const reducerFunction = (state: Transactions, action: Action) => {
  switch (action.type) {
    case "ADD_TRANSACTION":
      return {
        ...state,
        transactions: [action.payload, ...state.transactions],
      };
    case "DELETE_TRANSACTION":
      return {
        ...state,
        transactions: state.transactions.filter(
          (transaction) => transaction.id !== action.payload
        ),
      };
    default:
      return state;
  }
};

export default reducerFunction;
