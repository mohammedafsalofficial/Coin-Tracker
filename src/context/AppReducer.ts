import { Transactions } from "./GlobalState";

type Action = {
  type: string;
  payload: number;
};

const reducerFunction = (state: Transactions, action: Action) => {
  switch (action.type) {
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
