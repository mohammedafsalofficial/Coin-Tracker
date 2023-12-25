import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import Transaction from "./Transaction";

const TransactionList: React.FC = () => {
  const { transactions } = useContext(GlobalContext);

  return (
    <div className="mt-10">
      <h3 className="text-xl font-bold uppercase">History</h3>
      <hr className="my-3 border-[#808080]" />
      <ul className="">
        {transactions.map((transaction) => (
          <Transaction key={transaction.id} transaction={transaction} />
        ))}
      </ul>
    </div>
  );
};

export default TransactionList;
