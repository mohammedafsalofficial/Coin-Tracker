import React from "react";

type TransactionProps = {
  transaction: {
    id: number;
    text: string;
    amount: number;
  };
};

const Transaction: React.FC<TransactionProps> = ({ transaction }) => {
  const { text, amount } = transaction;

  return (
    <li className="flex justify-between space-x-1">
      <div className="w-full flex justify-between shadow-md mt-2 p-3 text-lg">
        <div className="w-full flex justify-between mr-2">
          <h1 className="">{text}</h1>
          <p>{amount > 0 ? "+$" + amount : "-$" + amount * -1}</p>
        </div>
        <div
          className={`border-2 ${amount > 0 ? "border-[#2ecc71]" : "border-[#c0392b]"}`}
        ></div>
      </div>
      <button className="bg-[#c0392b] text-white text-2xl mt-2 px-4 py-2">x</button>
    </li>
  );
};

export default Transaction;
