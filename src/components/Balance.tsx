import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const Balance: React.FC = () => {
  const { transactions } = useContext(GlobalContext);

  const totalBalance: number = Number.parseInt(
    transactions
      .map((transaction) => transaction.amount)
      .reduce((acc, amount) => acc + amount, 0)
      .toFixed(2)
  );

  return (
    <>
      <h3 className="text-lg md:text-xl font-semibold uppercase">Your balance</h3>
      <p className="text-4xl md:text-5xl font-bold">${totalBalance}</p>
    </>
  );
};

export default Balance;
