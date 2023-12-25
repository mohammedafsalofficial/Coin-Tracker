import { Action, InitialTransactionState } from "./GlobalState";

const reducerFunction = (state: InitialTransactionState, action: Action) => {
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
