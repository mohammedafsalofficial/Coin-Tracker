import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const IncomeExpenses: React.FC = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts: number[] = transactions.map((transaction) => transaction.amount);

  const income: number = Number.parseFloat(
    amounts
      .filter((amount) => amount > 0)
      .reduce((acc, amount) => acc + amount, 0)
      .toFixed(2)
  );

  const expense: number = Number.parseFloat(
    (
      amounts.filter((amount) => amount < 0).reduce((acc, amount) => acc + amount, 0) * -1
    ).toFixed(2)
  );

  return (
    <div className="w-96 mt-3 py-7 text-2xl flex justify-evenly items-center shadow-xl">
      <div className="space-y-1">
        <h3 className="uppercase">Income</h3>
        <p className="text-xl text-[#2ecc71]">+${income}</p>
      </div>
      <div className="border h-16 w-0"></div>
      <div className="space-y-1">
        <h3 className="uppercase">Expense</h3>
        <p className="text-xl text-[#c0392b]">-${expense}</p>
      </div>
    </div>
  );
};

export default IncomeExpenses;
