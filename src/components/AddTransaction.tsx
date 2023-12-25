import React, { FormEvent, useContext, useState } from "react";
import { GlobalContext, Transaction } from "../context/GlobalState";

const AddTransaction: React.FC = () => {
  const { addTransaction } = useContext(GlobalContext);

  const [text, setText] = useState<string>("");
  const [amount, setAmount] = useState<string>("");

  const handleSubmit = (event: FormEvent): void => {
    event.preventDefault();

    const newTransaction: Transaction = {
      id: Math.floor(Math.random() * 1000000),
      text: text,
      amount: Number.parseFloat(amount),
    };

    setText("");
    setAmount("");

    addTransaction(newTransaction);
  };

  return (
    <div className="mt-10">
      <h3 className="text-lg md:text-xl font-bold uppercase">Add Transaction</h3>
      <hr className="my-3 border-[#808080]" />
      <form className="mt-5" onSubmit={handleSubmit}>
        <div className="space-y-3">
          <div className="flex flex-col space-y-1">
            <label className="text-lg md:text-xl" htmlFor="text">
              Text
            </label>
            <input
              className="shadow-inner border border-[#808080] py-1 px-2 text-lg md:text-xl"
              type="text"
              placeholder="Enter Text"
              value={text}
              onChange={(event) => setText(event.target.value)}
            />
          </div>
          <div className="flex flex-col space-y-1">
            <label className="text-lg md:text-xl" htmlFor="amount">
              Amount
            </label>
            <input
              className="shadow-inner border border-[#808080] py-1 px-2 text-lg md:text-xl"
              type="number"
              placeholder="Enter Amount"
              value={amount}
              onChange={(event) => setAmount(event.target.value)}
            />
          </div>
        </div>
        <button className="w-full mt-5 p-2 bg-[#9c88ff] text-white rounded-md">
          Add transaction
        </button>
      </form>
    </div>
  );
};

export default AddTransaction;
