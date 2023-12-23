import { Action, TransactionState } from "./GlobalState";

const reducerFunction = (state: TransactionState, action: Action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default reducerFunction;
