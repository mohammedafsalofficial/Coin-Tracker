import React from "react";
import Header from "./components/Header";
import AppLayout from "./components/AppLayout";
import Balance from "./components/Balance";
import { GlobalContextProvider } from "./context/GlobalState";
import IncomeExpenses from "./components/IncomeExpenses";

import "./App.css";
import TransactionList from "./components/TransactionList";
import AddTransaction from "./components/AddTransaction";

const App: React.FC = () => {
  return (
    <AppLayout>
      <GlobalContextProvider>
        <Header />
        <div>
          <Balance />
          <IncomeExpenses />
          <TransactionList />
          <AddTransaction />
        </div>
      </GlobalContextProvider>
    </AppLayout>
  );
};

export default App;
